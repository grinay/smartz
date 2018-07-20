from rest_framework import serializers

from apps.contracts_uis.models import ContractUI


class ContractUISerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractUI
        fields = '__all__'

    def create(self, validated_data):
        raise NotImplementedError

    def update(self, instance, validated_data):
        raise NotImplementedError

    def validate(self, attrs):
        instance = ContractUI(**attrs)
        instance.clean()
        return attrs
