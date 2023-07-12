from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from constellations.views import ConstellationsAPIList, TestAPI, RegistrationView, LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/list', ConstellationsAPIList.as_view()),
    path('api/test', TestAPI.as_view()),
    path('api/register/', RegistrationView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

