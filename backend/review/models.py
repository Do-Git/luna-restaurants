from django.contrib.auth import get_user_model
from django.db import models

from project import settings
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    RATING = (
        ('0', 'no rating'),
        ('1', 'one star'),
        ('2', 'two stars'),
        ('3', 'three stars'),
        ('4', 'four stars'),
        ('5', 'five stars'),
    )
    content = models.CharField(max_length=600, null=True, blank=True)
    rating = models.CharField(max_length=1, choices=RATING, default='0')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE,
                               related_name='reviews',
                               null=True)
    restaurant = models.ForeignKey(to=Restaurant,
                                   related_name='reviews',
                                   on_delete=models.CASCADE,
                                   blank=True,
                                   null=True)
    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_reviews')

    def __str__(self):
        return f'Review for {self.restaurant} by {self.author} with {self.rating} rating'

