from django.contrib.auth import get_user_model
from rest_framework import serializers

from restaurant.serializers.nested import RestaurantInUserSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    restaurants = RestaurantInUserSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ["id",
                  "last_login",
                  "is_superuser",
                  "username",
                  "first_name",
                  "last_name",
                  "is_staff",
                  "is_active",
                  "date_joined",
                  "email",
                  "phone",
                  "location",
                  "things_I_love",
                  "description",
                  "profile_picture",
                  "restaurants",
                  ]
