from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login,logout
from .serializers import ConstellationSerializer,UserConstellation2Serializer
from .models import Constellation,UserConstellation2
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenRefreshView


class AddUserConstellation(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        constellation_id = request.data.get('constellation_id')

        # Создание новой записи в таблице UserConstellation2
        serializer = UserConstellation2Serializer(data={
            'user': user_id,
            'constellation': constellation_id
        })
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Запись успешно добавлена'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RefreshTokenView(TokenRefreshView):
    pass

class ConstellationsAPIList(generics.ListAPIView):
    queryset = Constellation.objects.all()
    serializer_class = ConstellationSerializer


class UserConstellationsAPIList(generics.ListAPIView):
    queryset = UserConstellation2.objects.filter()
    serializer_class = ConstellationSerializer


class TestAPI(generics.ListAPIView):
    queryset = Constellation.objects.first()
    serializer_class = ConstellationSerializer

class RegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'Пользователь успешно зарегистрирован'}, status=status.HTTP_201_CREATED)
    
    
class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        refresh_token = response.data['refresh']
        access_token = response.data['access']
        cookie_age = 3600  # Время жизни токена в секундах

        # Установка refresh-токена в cookie
        response.set_cookie(key='refresh_token', value=refresh_token, max_age=cookie_age, httponly=True, secure=True)

        return response
    
    

class LogoutView(APIView):
    def post(self, request):
        response = Response({'message': 'Вы успешно вышли'}, status=status.HTTP_200_OK)
        response.delete_cookie('refresh_token')  # Удаление refresh-токена из cookie
        return response


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
def GetUserConstellationsView(request):
    if request.user.is_authenticated:
        user = request.user

        user_constellations = UserConstellation2.objects.filter(user=user)
        serializer = UserConstellation2Serializer(user_constellations, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Пользователь не аутентифицирован'}, status=status.HTTP_401_UNAUTHORIZED)
    


#     from rest_framework.permissions import IsAuthenticated
# class ConstellationsAPIList(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         constellations = Constellation.objects.all()
#         serializer = ConstellationSerializer(constellations, many=True)
#         return Response(serializer.data)