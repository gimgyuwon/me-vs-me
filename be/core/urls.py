from django.urls import path
from .views import get_result, post_vote

urlpatterns = [
    path('result', get_result, name='get_result'),
    path('vote', post_vote, name='post_vote'),
]