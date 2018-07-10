import json
from typing import Dict

from apps.dapps.models import Dapp


# todo how to do better?
def dapp_pub_info(dapp: Dapp) -> Dict:
    return {
        'id': dapp.slug,
        "title": dapp.title,
        "network_id": str(dapp.network_id),
        "constructor_id": dapp.constructor.slug,
        "address": dapp.address,
        'bin': dapp.binary,
        'source': dapp.source,
        'abi': json.loads(dapp.abi),
        'blockchain': dapp.constructor.blockchain,
        "functions": json.loads(dapp.function_specs),
        "dashboard_functions": json.loads(dapp.dashboard_functions),
        'price': float(format(dapp.deploy_price, 'f').rstrip('0').rstrip('.')),
        "compiler_version": dapp.compiler_version,
        "compiler_optimization": dapp.compiler_optimization,
        "contract_name": dapp.contract_name,
        "constructor": {
            "name": dapp.constructor.name,
            "description": dapp.constructor.description,
            "image": dapp.constructor.image
        }
    }

