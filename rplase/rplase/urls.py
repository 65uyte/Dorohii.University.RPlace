from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('login/google/', RedirectView.as_view(url='/accounts/google/login/')),  # Додаємо посилання для входу через Google
]