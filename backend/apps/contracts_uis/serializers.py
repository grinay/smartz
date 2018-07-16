from typing import Dict, List

from apps.contracts_uis.models import ContractUI


def contract_ui_pub_info(ui: ContractUI) -> Dict:

    res = {
        'id': ui.slug,
        'name': ui.name,
        'blockchain': ui.blockchain,
        'address': ui.address,
        'description': ui.description,

        'functions': ui.get_functions(),
        'user_id': ui.user_id,
    }

    return res


def contracts_uis_pub_info(uis: List[ContractUI]) -> List[Dict]:
    res = []
    for ui in uis:
        res.append(
            contract_ui_pub_info(ui)
        )

    return res
