from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantInUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id',
                  'name',
                  'categories'
                  ]


class RestaurantInReview(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id',
                  'name',
                  'categories',
                  'created'
                  ]
