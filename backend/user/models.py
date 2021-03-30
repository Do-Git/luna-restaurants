from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    phone = models.CharField(max_length=15, blank=True)
    location = models.CharField(max_length=20, blank=True)
    things_I_love = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=500, blank=True)
    profile_picture = models.ImageField(blank=True, null=True, upload_to=user_directory_path)

    # @property
    # def friends(self):
    #     """Returns the list of friends"""
    #     friends_list = []
    #     received = Friendships.objects.filter(request_for=self, status='A')
    #     for friend in received:
    #         friends_list.append(friend.request_from)
    #     sent = Friendships.objects.filter(request_from=self, status='A')
    #     for friend in sent:
    #         friends_list.append(friend.request_for)
    #     return friends_list

    def __str__(self):
        return f'{User.id} {User.email}'

