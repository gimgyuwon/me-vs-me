from django.db import models

class Vote(models.Model):
    choice1 = models.CharField(max_length=1)
    choice2 = models.CharField(max_length=1)
    choice3 = models.CharField(max_length=1)
    choice4 = models.CharField(max_length=1)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Vote({self.id}): {self.choice1},{self.choice2},{self.choice3},{self.choice4}'