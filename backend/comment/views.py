
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, GenericAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers.default import CommentSerializer
from review.models import Review


class CreateNewComment(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        review = Review.objects.get(id=kwargs['pk'])

        comment = Comment(author=self.request.user, review=review, content=self.request.data['content'])
        comment.save()
        return Response(self.get_serializer(comment).data)


class GetCommentsByReview(ListAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'

    def get_queryset(self):
        return Comment.objects.filter(review__id=self.kwargs['review_id'])


class GetCommentsByUser(ListAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        return Comment.objects.filter(author__id=self.kwargs['user_id'])


class DeleteComment(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'


class ToggleLikeComment(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        user = request.user
        if user in instance.liked_by.all():
            instance.liked_by.remove(user)
        else:
            instance.liked_by.add(user)
        return Response(self.get_serializer(instance).data)
