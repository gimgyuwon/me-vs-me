from django.db import models

class Participant(models.Model):
    id = models.CharField(max_length=50, unique=True, primary_key=True)
    gender = models.CharField(max_length=10)
    choice1 = models.CharField(max_length=1, null=True, blank=True)
    choice2 = models.CharField(max_length=1, null=True, blank=True)
    choice3 = models.CharField(max_length=1, null=True, blank=True)
    choice4 = models.CharField(max_length=1, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Participant({self.user_id}): {self.choice1},{self.choice2},{self.choice3},{self.choice4}'