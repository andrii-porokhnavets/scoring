from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Score(models.Model):
    game = models.ForeignKey('games.Game', on_delete=models.CASCADE)
    who = models.ForeignKey('players.Player', on_delete=models.CASCADE, related_name='who')
    whom = models.ForeignKey('players.Player', on_delete=models.CASCADE, related_name='whom')
    value = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        validators=[
            MinValueValidator(0.1),
            MaxValueValidator(10),
        ]
    )
