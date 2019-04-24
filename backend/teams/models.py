from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=60)
    players = models.ManyToManyField('players.Player')
    is_win = models.fields.BooleanField()
