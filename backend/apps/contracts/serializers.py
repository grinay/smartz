import json
from typing import Dict

from apps.contracts.models import Contract


# todo how to do better?
def contract_pub_info(contract: Contract) -> Dict:
    return {
        'id': contract.slug,
        "title": contract.title,
        "network_id": str(contract.network_id),
        "ctor_id": contract.constructor.slug,
        "address": contract.address,
        'bin': contract.binary,
        'source': contract.source,
        'abi': json.loads(contract.abi),
        'blockchain': contract.constructor.blockchain,
        "functions": json.loads(contract.function_specs),
        "dashboard_functions": json.loads(contract.dashboard_functions),
        'price': float(format(contract.deploy_price, 'f').rstrip('0').rstrip('.')),
        "compiler_version": contract.compiler_version,
        "compiler_optimization": contract.compiler_optimization,
        "contract_name": contract.contract_name,
        "constructor": {
            "name": contract.constructor.name,
            "description": contract.constructor.description,
            "image": contract.constructor.image
        }
    }

