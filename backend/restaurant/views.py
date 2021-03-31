from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView

from restaurant.models import Restaurant
from restaurant.permissions import IsOwnerOrAdmin
from restaurant.serializers.default import RestaurantSerializer


class CreateRestaurant(CreateAPIView):
    """
    POST: Create a new restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListRestaurants(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []


class GetRestaurantByCategory(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(categories__icontains=self.kwargs['pk'])


class GetRestaurantByUser(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(owner_id=self.kwargs['pk'])


class HandleRestaurant(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsOwnerOrAdmin]


class ShowFourBestRatedRestaurants(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.all().order_by('-avg_rating')[:4]

