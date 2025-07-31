from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Participant
import json
from django.http import JsonResponse

# Post /api/vote
@api_view(['POST'])
@csrf_exempt
def post_vote(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data.get('id')
        gender = data.get('gender')
        answers = data.get('answers')
        
        if not id or not answers or len(answers) != 4:
            return JsonResponse({'error': 'Invalid input'}, status=400)
    
        participant, created = Participant.objects.get_or_create(id = id)
        participant.gender = gender
        participant.choice1 = answers[0]
        participant.choice2 = answers[1]
        participant.choice3 = answers[2]
        participant.choice4 = answers[3]
        participant.save()

        return JsonResponse({'message': 'Vote saved'})
    return JsonResponse({'error': 'Invalid method'}, status=405)

# Get /api/result
@api_view(['GET'])
def get_result(request, id, gender):
    try:
         participant = Participant.objects.get(id = id)
    except Participant.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
    
    all_votes = Participant.objects.all()
    vote_num = all_votes.count()

    if vote_num == 0:
        return JsonResponse({'error': 'No votes yet'}, status=404)

    counts = [{'a': 0, 'b': 0} for _ in range(4)]

    for p in all_votes:
        for i, choice in enumerate([p.choice1, p.choice2, p.choice3, p.choice4]):
            if choice == 'a':
                counts[i]['a'] += 1
            elif choice == 'b':
                counts[i]['b'] += 1
    result_key = ''
    for c in counts:
        if c['a'] >= c['b']:
            result_key += 'a'
        else:
            result_key += 'b'
    
    return JsonResponse({
        'resultKey': result_key,
        'voteNum': vote_num,
    })