from django.contrib import admin
from .models import UserConstellation,UserProfile, Constellation

admin.site.register(UserConstellation)
admin.site.register(Constellation)
admin.site.register(UserProfile)