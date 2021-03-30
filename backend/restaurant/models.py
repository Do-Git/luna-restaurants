from django.contrib.auth import get_user_model
from django.db import models
from django.conf import settings

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Restaurant(models.Model):
    CATEGORIES = (
        ('0', 'No category'),
        ('1', 'Pub'),
        ('2', 'Italian'),
        ('3', 'Fast Food'),
        ('4', 'Chinese'),
        ('5', 'Thai'),
        ('6', 'Oriental'),
        ('7', 'Vegetarian'),
        ('8', 'Bar'),
        ('9', 'Sea Food'),
    )

    PRICE_LEVEL = (
        ('0', 'No information'),
        ('1', 'Budget'),
        ('2', 'Fair'),
        ('3', 'Expensive')
    )

    name = models.CharField(max_length=30)
    country = models.CharField('Country', max_length=20)
    street = models.CharField('Street', max_length=30)
    city = models.CharField('City', max_length=20)
    zip_code = models.CharField('ZIP', max_length=10, blank=True)
    website = models.CharField(max_length=70, blank=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=70, blank=True)
    opening_hours = models.CharField(max_length=13)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, related_name='restaurants',
                              null=True)
    price_level = models.CharField(max_length=2, choices=PRICE_LEVEL, default='0')
    categories = models.CharField(max_length=2, choices=CATEGORIES, default='0')
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f'{self.name} owned by {self.owner}'
