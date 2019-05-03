from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Team
from .serializers import TeamSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
