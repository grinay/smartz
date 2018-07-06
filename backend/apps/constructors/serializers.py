import json
from typing import Dict, List

from apps.constructors.models import Constructor


# todo how to do better?
def constructor_pub_info(constructor: Constructor) -> Dict:
    from apps.constructors.views import _process_ctor_schema

    res = {
        'id': constructor.slug,
        'name': constructor.name,
        'description': constructor.description,
        'price': constructor.get_formatted_price(),
        'schema': _process_ctor_schema(constructor.blockchain, constructor.get_schema()),
        'ui_schema': constructor.get_ui_schema(),
        'blockchain': constructor.blockchain,
        'image': constructor.image,
        'is_public': constructor.is_public,
        'user_id': constructor.user_id,
    }

    if hasattr(constructor, 'dapps__count'):
        res['compilations_count'] = constructor.dapps__count

    return res


def constructors_pub_info(constructors: List[Constructor]) -> List[Dict]:
    res = []
    for constructor in constructors:
        res.append(
            constructor_pub_info(constructor)
        )

    return res
