import json
from typing import Dict

from apps.contracts.models import Contract


# todo how to do better?
def contract_pub_info(contract: Contract) -> Dict:
    return {
        'instance_id': contract.slug,
        "instance_title": contract.title,
        "network_id": str(contract.network_id),
        "ctor_id": contract.constructor.slug,
        "address": contract.address,
        'bin': contract.binary,
        'source': contract.source,
        'abi': json.loads(contract.abi),
        'blockchain': contract.constructor.blockchain,
        "functions": json.loads(contract.function_specs),
        "dashboard_functions": json.loads(contract.dashboard_functions),
        'price_eth': float(format(contract.deploy_price, 'f').rstrip('0').rstrip('.')),  # todo (price_eth in front to price)
        "compiler_version": contract.compiler_version,
        "compiler_optimization": contract.compiler_optimization,
        "contract_name": contract.contract_name,
        "constructor": {
            "name": contract.constructor.name,
            "description": contract.constructor.description,
            "image": contract.constructor.image
        }
    }

