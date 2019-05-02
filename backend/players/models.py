from django.db import models


class Player(models.Model):
    nickname = models.fields.CharField(max_length=60)

    def __str__(self):
        return self.nickname
