from rest_framework import serializers

from comment.models import Comment
from review.serializers.nested import ReviewInCommentSerializer
from user.serializers.nested import UserInReviewSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserInReviewSerializer(read_only=True)
    review = ReviewInCommentSerializer(read_only=True)
    liked_by = UserInReviewSerializer(read_only=True, many=True)

    class Meta:
        model = Comment
        fields = '__all__'


class CommentBasicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id']
