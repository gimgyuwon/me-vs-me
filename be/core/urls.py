from django.urls import path
from .views import result_view, vote_view

urlpatterns = [
    path('result', result_view),
    path('vote', vote_view),
]