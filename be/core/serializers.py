from rest_framework import serializers
from .models import Vote

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id', 'choice1', 'choice2', 'choice3', 'choice4']