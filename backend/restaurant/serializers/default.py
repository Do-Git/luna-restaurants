from rest_framework import serializers

from restaurant.models import Restaurant
from review.models import Review
from review.serializers.nested import ReviewInRestaurantSerializer
from user.serializers.nested import UserInReviewSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserInReviewSerializer(read_only=True)
    avg_rating = serializers.SerializerMethodField()
    reviews = ReviewInRestaurantSerializer(read_only=True, many=True)

    @staticmethod
    def get_avg_rating(instance):
        average = 0
        all_ratings = []
        restaurants = Review.objects.filter(restaurant=instance)
        for review in restaurants:
            all_ratings.append(review.rating)
            average += review.rating
        if len(all_ratings) > 0:
            return average / len(all_ratings)

    class Meta:
        model = Restaurant
        fields = '__all__'
