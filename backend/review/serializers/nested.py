from rest_framework import serializers

from restaurant.serializers.nested import RestaurantInUserSerializer, RestaurantInReview
from review.models import Review
from user.serializers.nested import UserInReviewSerializer


class ReviewInRestaurantSerializer(serializers.ModelSerializer):
    author = UserInReviewSerializer(read_only=True)
    restaurant = RestaurantInReview(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'content', 'author', 'rating', 'created', 'restaurant']


class ReviewInCommentSerializer(serializers.ModelSerializer):
    author = UserInReviewSerializer(read_only=True)
    restaurant = RestaurantInReview(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'content', 'author', 'rating', 'created', 'restaurant']
