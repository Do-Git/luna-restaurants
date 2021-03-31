from django.contrib.auth import get_user_model
from django.db import models
from django.conf import settings

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Restaurant(models.Model):
    CATEGORIES = (
        ('No category', '0'),
        ('Pub', '1'),
        ('Italian', '2'),
        ('Fast Food', '3'),
        ('Chinese', '4'),
        ('Thai', '5'),
        ('Oriental', '6'),
        ('Vegetarian', '7'),
        ('Bar', '8'),
        ('Sea Food', '9'),
    )

    PRICE_LEVEL = (
        ('No information', '0'),
        ('Budget', '1'),
        ('Fair', '2'),
        ('Expensive', '3')
    )

    name = models.CharField(max_length=30)
    country = models.CharField('Country', max_length=20)
    street = models.CharField('Street', max_length=30)
    city = models.CharField('City', max_length=20)
    zip_code = models.CharField('ZIP', max_length=10, blank=True)
    website = models.CharField(max_length=70, blank=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=70, blank=True)
    opening_hours = models.CharField(max_length=50)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name='restaurants',
                              null=True)
    price_level = models.CharField(max_length=15, choices=PRICE_LEVEL, default='0')
    categories = models.CharField(max_length=15, choices=CATEGORIES, default='0')
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f'{self.name} owned by {self.owner}'

    # @property
    # def avg_rating(self):
    #     average = 0
    #     all_ratings = []
    #     restaurants = Review.objects.filter(restaurant=self)
    #     for review in restaurants:
    #         all_ratings.append(review.rating)
    #         average += int(review.rating)
    #     average = average/len(all_ratings)
    #     return average
