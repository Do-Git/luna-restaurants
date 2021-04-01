from django.contrib.auth import get_user_model
from django.http import JsonResponse
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from review.models import Review
from review.permissions import IsAuthorOrAdmin
from review.serializers.default import ReviewSerializer
from review.serializers.nested import ReviewInRestaurantSerializer

User = get_user_model()


class CreateNewReview(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        restaurant = Restaurant.objects.get(id=kwargs['pk'])
        rating = self.request.data['rating']

        if rating in [1, 2, 3, 4, 5]:
            review = Review(author=self.request.user, rating=rating,
                            restaurant=restaurant, content=self.request.data['content'])
            review.save()
            return Response(self.get_serializer(review).data)
        else:
            return JsonResponse({'detail': 'Please provide valid rating(1 to 5)!'})


class ListReviewsOfSingleRestaurant(ListAPIView):
    serializer_class = ReviewInRestaurantSerializer
    lookup_field = 'id'

    def get_queryset(self):
        restaurant = Restaurant.objects.get(id=self.kwargs['pk'])
        return Review.objects.filter(restaurant=restaurant)


class ListReviewsByUser(ListAPIView):
    serializer_class = ReviewInRestaurantSerializer
    lookup_field = 'id'

    def get_queryset(self):
        user = User.objects.get(id=self.kwargs['pk'])
        return Review.objects.filter(author=user)


class GetUpdateDeleteReviewById(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthorOrAdmin]
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class ToggleLikeReview(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        user = request.user
        if user in instance.liked_by.all():
            instance.liked_by.remove(user)
        else:
            instance.liked_by.add(user)
        return Response(self.get_serializer(instance).data)


class ListReviewsUserLikes(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(liked_by=self.request.user)


class ListAllReviews(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
