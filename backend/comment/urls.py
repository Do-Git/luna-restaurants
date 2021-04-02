from django.urls import path

from comment.views import CreateNewComment, GetCommentsByUser, DeleteComment, ToggleLikeComment, GetCommentsByReview

urlpatterns = [
    path('new/<int:pk>/', CreateNewComment.as_view()),
    path('<int:user_id>/', GetCommentsByUser.as_view()),
    path('delete/<int:comment_id>/', DeleteComment.as_view()),
    path('like/<int:pk>/', ToggleLikeComment.as_view()),
    path('review/<review_id>/', GetCommentsByReview.as_view())
    ]
