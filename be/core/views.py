from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Participant, Vote
import json
from django.http import JsonResponse
from django.db import transaction

@api_view(['POST'])
@csrf_exempt
def create_participant(request):
    data = request.data
    id = data.get('id')
    gender = data.get('gender')
    if not id or not gender:
        return JsonResponse({'error': 'Invalid data'}, status=400)
    
    participant, created = Participant.objects.get_or_create(id=id)

    if not created:
        participant.gender = gender
        participant.save()

    return JsonResponse({'message': 'Participant created'})


# Post /api/vote
@api_view(['POST'])
def post_vote(request):
    data = request.data
    id = data.get('id')
    gender = data.get('gender')
    answers = data.get('answers')

    if not id or not gender or not answers or len(answers) != 4:
        return JsonResponse({'error': 'Invalid input'}, status=400)

    participant = Participant.objects.filter(id=id, gender=gender).first()

    if not participant:
        return JsonResponse({'error': 'Participant not found'}, status=404)

    with transaction.atomic():
        for i, answer in enumerate(answers, start=1):
            Vote.objects.create(
                participant=participant,
                question_num=i,
                choice=answer
            )

    return JsonResponse({'message': 'Vote saved'})

# Get /api/result
@api_view(['GET'])
def get_result(request, id, gender):
    try:
         participant = Participant.objects.get(id = id)
    except Participant.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
    
    votes = Vote.objects.filter(participant=participant)
    counts = [{'a': 0, 'b': 0} for _ in range(4)]
    vote_num = votes.count() / 4
    result_key = ''
    
    if not votes.exists():
        return JsonResponse({'error': 'No votes yet'}, status=404)
       

    for vote in votes:
        idx = vote.question_num - 1
        if vote.choice == 'a':
            counts[idx]['a'] += 1
        elif vote.choice == 'b':
            counts[idx]['b'] += 1
        
    for q in range(4):
        if counts[q]['a'] >= counts[q]['b']:
            result_key += 'a'
        else:
            result_key += 'b'
        
    return JsonResponse({
        'resultKey': result_key,
        'voteNum': vote_num,
        'counts': counts,
    })