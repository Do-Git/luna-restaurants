from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.response import Response

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
