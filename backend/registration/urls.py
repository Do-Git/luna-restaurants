from django.urls import path

from registration.views import CreateRegistrationView, SignUpView

urlpatterns = [
    path('', CreateRegistrationView.as_view(), name='Register a new user'),  # POST
    path('validate/', SignUpView.as_view(), name='Validate a new user'),  # POST
]
