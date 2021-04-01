from django.urls import path

from restaurant.views import ListRestaurants, CreateRestaurant, GetRestaurantByCategory, GetRestaurantByUser, \
    HandleRestaurant, ShowFourBestRatedRestaurants

urlpatterns = [
    path('', ListRestaurants.as_view()),
    path('new/', CreateRestaurant.as_view()),
    path('category/<int:pk>/', GetRestaurantByCategory.as_view()),
    path('user/<int:pk>/', GetRestaurantByUser.as_view()),
    path('<int:pk>/', HandleRestaurant.as_view()),
]
