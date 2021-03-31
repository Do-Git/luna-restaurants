from django.urls import path

from review.views import CreateNewReview, ListReviewsOfSingleRestaurant, ListReviewsByUser, GetUpdateDeleteReviewById, \
    ToggleLikeReview, ListReviewsUserLikes, ListAllReviews

urlpatterns = [
    path('new/<int:pk>/', CreateNewReview.as_view()),
    path('restaurant/<int:pk>/', ListReviewsOfSingleRestaurant.as_view()),
    path('user/<int:pk>/', ListReviewsByUser.as_view()),
    path('<int:pk>/', GetUpdateDeleteReviewById.as_view()),
    path('like/<int:pk>/', ToggleLikeReview.as_view()),
    path('likes/', ListReviewsUserLikes.as_view()),
    path('all/', ListAllReviews.as_view())
]
