from django.db import models

class Participant(models.Model):
    id = models.CharField(max_length=50, unique=True, primary_key=True)
    gender = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Participant({self.id}): {self.gender}'

class Vote(models.Model):
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    question_num = models.IntegerField()
    choice = models.CharField(max_length=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Vote(participant={self.participant.id}, Q{self.question_num}, choice={self.choice})'