from django.db import models


class Game(models.Model):
    title = models.CharField(max_length=100)
    team_1 = models.ForeignKey('teams.Team', on_delete=models.CASCADE, related_name='team_1')
    team_2 = models.ForeignKey('teams.Team', on_delete=models.CASCADE, related_name='team_2')
