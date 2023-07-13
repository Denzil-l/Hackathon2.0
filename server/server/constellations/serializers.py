from rest_framework import serializers
from .models import Constellation,UserConstellation2

class ConstellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Constellation
        fields = '__all__'
class UserConstellation2Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserConstellation2
        fields = '__all__'