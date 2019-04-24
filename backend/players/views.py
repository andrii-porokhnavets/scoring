from django.shortcuts import render
from rest_framework import generics
from players.models import Player
from players.serializers import PlayerSerializer
import pymongo


class PlayerListCreate(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
