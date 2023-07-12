from rest_framework import serializers
from .models import Constellation

class ConstellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Constellation
        fields = '__all__'