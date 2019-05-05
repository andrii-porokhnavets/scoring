from rest_framework import serializers, validators
from .models import Score


class ScoreSerializer(serializers.ModelSerializer):
    def validate(self, data):
        if data['who'] == data['whom']:
            raise serializers.ValidationError('Player can not rate himself')

        return data

    class Meta:
        model = Score
        fields = '__all__'

        validators = [
            validators.UniqueTogetherValidator(
                queryset=Score.objects.all(),
                fields=('who', 'whom')
            )
        ]
