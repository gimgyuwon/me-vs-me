from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Vote
from .serializers import VoteSerializer

# Get /api/result
@api_view(['GET'])
def get_result(request):
    vote = Vote.objects.last()
    if not vote:
        return Response({"detail": "No votes yet"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = VoteSerializer(vote)
    return Response(serializer.data)


# Post /api/vote
@api_view(['POST'])
def post_vote(request):
    serializer = VoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)