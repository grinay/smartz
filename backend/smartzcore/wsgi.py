"""
WSGI config for smartz project.
It exposes the WSGI callable as a module-level variable named ``application``.
For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""
import os
import sys

# todo
lib_dir = os.path.realpath(os.path.join(os.path.dirname(__file__), '..', 'pythonlib'))
sys.path.append(lib_dir)

env = os.getenv('ENVIRONMENT')
assert env, "Env is not set"

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smartzcore.settings')
os.environ.setdefault('DJANGO_CONFIGURATION', env.title())

from configurations.wsgi import get_wsgi_application

application = get_wsgi_application()
