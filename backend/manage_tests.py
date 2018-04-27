#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':

    # todo
    lib_dir = os.path.realpath(os.path.join(os.path.dirname(__file__), 'pythonlib'))
    sys.path.append(lib_dir)

    # used for development on local machine only
    configuration = "Tests" # os.getenv('ENVIRONMENT', 'development').title()
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smartzcore.settings')
    os.environ.setdefault('DJANGO_CONFIGURATION', configuration)

    try:
        from configurations.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            'Couldn\'t import Django. Are you sure it\'s installed and '
            'available on your PYTHONPATH environment variable? Did you '
            'forget to activate a virtual environment?') 
    execute_from_command_line(sys.argv)
