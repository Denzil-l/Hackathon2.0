from django.db import models
from django.contrib.auth.models import User

class Constellation(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    features = models.JSONField()
    TYPE_CHOICES = [
        ('North', 'North'),
        ('South', 'South'),
    ]
    type = models.CharField(max_length=5, choices=TYPE_CHOICES)
    image = models.ImageField(upload_to='constellation_images')
    is_zodiac = models.BooleanField()
    def __str__(self):
                return f"{self.name}"
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
            return f"{self.user}"
class UserConstellation(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    constellation = models.ForeignKey(Constellation, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.user.username} {self.constellation.name}"
    

