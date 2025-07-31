from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Get /api/result
@api_view(['GET'])
def result_view(request):
    data = {
        "resultKey": "bbab",
        "vote_num": 3
    }
    return Response(data)


# Post /api/vote
@api_view(['POST'])
def vote_view(request):
    vote_data = request.data

    return Response({"received": vote_data}, status=status.HTTP_201_CREATED)