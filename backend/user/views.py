from django.contrib.auth import get_user_model
from django.db.models import Q, Avg
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers.default import RestaurantSerializer
from review.models import Review
from review.serializers.default import ReviewSerializer
from user.serializers.default import UserSerializer

User = get_user_model()


class GetEditDeleteMyProfile(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class ListAllUsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetUserById(RetrieveAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(pk=self.kwargs['pk'])


class SearchForUser(ListAPIView):
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search = request.query_params.get('search')

        if search:
            queryset = queryset.filter(username__icontains=search)
            # serializer = self.get_serializer(queryset, many=True)
            serializer = UserSerializer(queryset, many=True)
        else:
            serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class Search(ListAPIView):
    permission_classes = []

    def get_serializer_class(self):
        type_of_search = self.request.query_params.get('type')

        if type_of_search == 'restaurants':
            return RestaurantSerializer
        elif type_of_search == 'users':
            return UserSerializer
        elif type_of_search == 'reviews':
            return ReviewSerializer

    def get_queryset(self):
        type_of_search = self.request.query_params.get('type')
        search = self.request.query_params.get('search_string')
        category = Restaurant.objects.filter()

        if type_of_search == 'restaurants':
            return Restaurant.objects.filter(Q(name__icontains=search) |
                                             Q(categories__icontains=search))
        elif type_of_search == 'users':
            return User.objects.filter(Q(username__icontains=search) |
                                       Q(first_name__icontains=search) |
                                       Q(last_name__icontains=search))
        elif type_of_search == 'reviews':
            return Review.objects.filter(Q(content__icontains=search) |
                                         Q(user__username__icontains=search) |
                                         Q(restaurant__name__icontains=search))


class GetBestFourRestaurants(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.annotate(average=Avg('reviews__rating')).order_by('-average')[:4]
