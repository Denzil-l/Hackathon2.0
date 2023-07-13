from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from constellations.views import ConstellationsAPIList,UserConstellationsAPIList, TestAPI, RegistrationView, LoginView, GetUserConstellationsView,AddUserConstellation, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/list', ConstellationsAPIList.as_view()),
    path('api/userlist', UserConstellationsAPIList.as_view()),
    path('api/register/', RegistrationView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/add/', AddUserConstellation.as_view()),
    path('api/get-user-constellations/', GetUserConstellationsView, name='get_user_constellations'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

