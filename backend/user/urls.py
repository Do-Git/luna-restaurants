from django.urls import path

from user.views import GetEditDeleteMyProfile, ListAllUsersView, GetUserById, SearchForUser, Search, \
    GetBestFourRestaurants

urlpatterns = [
    path('me/', GetEditDeleteMyProfile.as_view()),
    path('users/list/', ListAllUsersView.as_view()),
    path('users/<int:pk>/', GetUserById.as_view()),
    path('users/', SearchForUser.as_view()),
    path('search/', Search.as_view()),
    path('home/', GetBestFourRestaurants.as_view())
]
