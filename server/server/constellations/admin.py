from django.contrib import admin
from .models import UserConstellation,UserConstellation2,UserProfile, Constellation

admin.site.register(UserConstellation)
admin.site.register(UserConstellation2)
admin.site.register(Constellation)
admin.site.register(UserProfile)