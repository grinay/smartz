import json

from django.core.management.base import BaseCommand, CommandError

from apps.constructors.models import Constructor
from smartzcore.service_instances import WithEngine


class Command(BaseCommand, WithEngine):
    help = 'Pupulate version and params from constructor to db'


    def handle(self, *args, **options):
        for constructor in Constructor.objects.all():
            try:
                source = self.constructor_engine._load_constructor_source(constructor.slug)
                version_info = self.constructor_engine.get_constructor_version(source)
                if 'error' == version_info['result']:
                    print("{}\t{}\t{}".format(constructor.slug, constructor.name, version_info['error_descr']))
                    continue

                constructor.version = version_info['version']
                constructor.blockchain = version_info['blockchain']


                params = self.constructor_engine.get_constructor_params(source)
                if 'error' == params['result']:
                    print("{}\t{}\t{}".format(constructor.slug, constructor.name, params['error_descr']))
                    continue

                constructor.schema = json.dumps(params.get('schema', {}))
                constructor.ui_schema = json.dumps(params.get('ui_schema', {}))

                constructor.save()

            except Exception as e:
                print("{}\t{}\t{}".format(constructor.slug, constructor.name, str(e)))



            print("{}\t{}\t{}".format(constructor.slug, constructor.name, 'ok'))