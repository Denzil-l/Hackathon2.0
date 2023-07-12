from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login,logout
from .serializers import ConstellationSerializer
from .models import Constellation



class ConstellationsAPIList(generics.ListAPIView):
    queryset = Constellation.objects.all()
    serializer_class = ConstellationSerializer
class TestAPI(generics.ListAPIView):
    queryset = Constellation.objects.first()
    serializer_class = ConstellationSerializer

class RegistrationView(APIView):
    def post(self, request):
        # Получите данные из запроса
        username = request.data.get('username')
        password = request.data.get('password')

        # Создайте нового пользователя
        user = User.objects.create_user(username=username, password=password)

        # Дополнительная обработка, если необходимо

        return Response({'message': 'Пользователь успешно зарегистрирован'}, status=status.HTTP_201_CREATED)
    
    
class LoginView(APIView):
    def post(self, request):
        # Получите данные из запроса
        username = request.data.get('username')
        password = request.data.get('password')

        # Проверьте учетные данные пользователя
        user = authenticate(username=username, password=password)

        if user is not None:
            # Аутентификация успешна
            login(request, user)
            return Response({'message': 'Аутентификация успешна'}, status=status.HTTP_200_OK)
        else:
            # Неверные учетные данные
            return Response({'message': 'Неверные учетные данные'}, status=status.HTTP_401_UNAUTHORIZED)