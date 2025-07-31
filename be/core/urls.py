from django.urls import path
from .views import get_result, post_vote, create_participant

urlpatterns = [
    path('participant/', create_participant, name='create_participant'),
    path('vote/', post_vote, name='post_vote'),
    path('result/<str:id>/<str:gender>/', get_result, name='get_result'),
]