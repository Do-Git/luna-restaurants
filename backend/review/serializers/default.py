from rest_framework import serializers

from restaurant.serializers.nested import RestaurantInUserSerializer
from review.models import Review
from user.serializers.nested import UserInReviewSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = UserInReviewSerializer(read_only=True)
    restaurant = RestaurantInUserSerializer(read_only=True)
    liked_by = UserInReviewSerializer(read_only=True, many=True)

    class Meta:
        model = Review
        fields = '__all__'
