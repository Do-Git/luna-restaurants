from django.contrib.auth import get_user_model
from django.db import models

from review.models import Review

User = get_user_model()


class Comment(models.Model):
    author = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE, blank=True)
    review = models.ForeignKey(to=Review, related_name='comments', on_delete=models.CASCADE, null=True, blank=True)
    content = models.CharField(max_length=600, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    modified = models.DateTimeField(auto_now=True, null=True, blank=True, )
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments', blank=True)

    def __str__(self):
        return f' Comment: "{self.content}", written by: {self.author} for restaurant: {self.review}'

