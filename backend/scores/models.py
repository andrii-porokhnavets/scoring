from django.db import models


class Score(models.Model):
    game = models.ForeignKey('games.Game', on_delete=models.CASCADE)
    who = models.ForeignKey('players.Player', on_delete=models.CASCADE, related_name='who')
    whom = models.ForeignKey('players.Player', on_delete=models.CASCADE, related_name='whom')
    value = models.DecimalField(max_digits=3, decimal_places=1)
