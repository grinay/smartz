import json
from typing import Dict, Optional

from rest_framework import serializers

from apps.dapps.models import Dapp, Transaction, Log, Request


# todo how to do better?
def dapp_pub_info(dapp: Dapp, owned_by_current_user: bool=False, custom_title: Optional[str]=None) -> Dict:
    return {
        'id': dapp.slug,
        "title": custom_title if custom_title else dapp.title,
        "network_id": str(dapp.network_id),
        "constructor_id": dapp.constructor.slug if dapp.constructor else None,
        "contract_ui_id": dapp.contract_ui.slug if dapp.contract_ui else None,
        "address": dapp.address,
        'bin': dapp.binary,
        'source': dapp.source,
        'abi': json.loads(dapp.abi),
        'blockchain': dapp.blockchain,
        "functions": json.loads(dapp.function_specs),
        "dashboard_functions": json.loads(dapp.dashboard_functions),
        'price': float(format(dapp.deploy_price, 'f').rstrip('0').rstrip('.')),
        "compiler_version": dapp.compiler_version,
        "compiler_optimization": dapp.compiler_optimization,
        "contract_name": dapp.contract_name,
        "owned_by_current_user": owned_by_current_user,
        "constructor": {
            "name": dapp.constructor.name,
            "description": dapp.constructor.description,
            "image": dapp.constructor.image
        } if dapp.constructor else None,
        "contract_ui": {
            "name": dapp.contract_ui.name,
            "description": dapp.contract_ui.description,
            "image": dapp.contract_ui.image
        } if dapp.contract_ui else None,

    }


class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = ('name', 'created_at', 'data')

    def validate(self, attrs):
        instance = Log(**attrs)
        instance.clean()
        return attrs


class TransactionSerializer(serializers.ModelSerializer):
    logs = LogSerializer(many=True)

    class Meta:
        model = Transaction
        fields = (
            'id', 'tx_id', 'blockchain', 'execution_datetime', 'mining_datetime', 'initiator_address',
            'function_name', 'function_title', 'function_description', 'function_arguments',
            'info', 'is_success', 'error', 'logs'
        )
        depth = 1

    def create(self, validated_data):
        logs_data = validated_data.pop('logs')
        tx = super().create(validated_data)

        for log_data in logs_data:
            Log.objects.create(tx=tx, **log_data)

        return tx

    def update(self, instance, validated_data):
        raise NotImplementedError

    def validate(self, attrs):
        copy_attrs = attrs.copy()
        logs_attrs = copy_attrs.pop('logs')
        instance = Transaction(**copy_attrs)
        instance.clean()
        return attrs


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = (
            'id', 'blockchain', 'execution_datetime', 'initiator_address',
            'function_name', 'function_title', 'function_description', 'function_arguments',
            'result', 'is_success', 'error'
        )

    def update(self, instance, validated_data):
        raise NotImplementedError

    def validate(self, attrs):
        instance = Request(**attrs)
        instance.clean()
        return attrs
