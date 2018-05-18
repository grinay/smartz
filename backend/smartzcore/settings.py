"""
Django settings for smartz project.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""
import os

from configurations import Configuration, values

class Common(Configuration):
    # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))

    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = values.SecretValue()

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = values.BooleanValue(False)

    IS_TESTING = False

    # [+++]
    ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']

    # Application definition
    INSTALLED_APPS = [
        'django.contrib.auth',          # admin dependency
        'django.contrib.contenttypes',  # admin dependency
        'django.contrib.messages',      # admin dependency
        'django.contrib.sessions',      # admin dependency
        'django.contrib.admin',

        'django.contrib.staticfiles',   # admin dependency

        'django_extensions',

        'apps.constructors',
        'apps.contracts',
        'apps.users',
        'apps.tools',
    ]

    MIDDLEWARE = [
        'django.contrib.sessions.middleware.SessionMiddleware',     # AuthenticationMiddleware dependency
        'django.contrib.auth.middleware.AuthenticationMiddleware',  # admin dependency
        'django.contrib.messages.middleware.MessageMiddleware',     # admin dependency

        # 'django.middleware.security.SecurityMiddleware',
        #
        # 'django.middleware.common.CommonMiddleware',
        # 'django.middleware.csrf.CsrfViewMiddleware',
        # 'django.middleware.clickjacking.XFrameOptionsMiddleware',

        'smartzcore.middleware.SmartzMiddleware',
        'smartzcore.middleware.JSONMiddleware'
    ]

    ROOT_URLCONF = 'smartzcore.urls'

    TEMPLATES = [  # for admin mostly
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    # 'django.template.context_processors.debug',
                    # 'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',          # admin dependency
                    'django.contrib.messages.context_processors.messages',  # admin dependency
                ],
            },
        },
    ]

    WSGI_APPLICATION = 'smartzcore.wsgi.application'


    DB_HOST = os.environ.get('DB_HOST')
    DB_USER = os.environ.get('DB_USER')
    DB_PASS = os.environ.get('DB_PASS')
    DB_NAME = os.environ.get('DB_NAME')
    assert DB_HOST, "DB_HOST is not set in env"
    assert DB_USER, "DB_USER is not set in env"
    assert DB_PASS, "DB_PASS is not set in env"
    assert DB_NAME, "DB_NAME is not set in env"

    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    DATABASES = values.DatabaseURLValue(
        'postgresql://{}:{}@{}/{}'.format(DB_USER, DB_PASS, DB_HOST, DB_NAME)
    )

    # Password validation
    # https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators
    AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
        },
    ]

    # Internationalization
    # https://docs.djangoproject.com/en/2.0/topics/i18n/
    LANGUAGE_CODE = 'en-us'

    TIME_ZONE = 'UTC'

    USE_I18N = True

    USE_L10N = True

    USE_TZ = True

    APPEND_SLASH = False

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/2.0/howto/static-files/
    STATIC_URL = '/backend-static/'
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

    AUTH_USER_MODEL = 'users.User'

    # SMARTZ settings 
    SMARTZ_MONGO_HOST = 'mongo' # docker container


    AUTH0_HOST = 'smartz.auth0.com'

    SMARTZ_CONSTRUCTOR_CALL_SERVICE_URL = os.environ.get('CONSTRUCTOR_CALL_SERVICE_URL')
    assert SMARTZ_CONSTRUCTOR_CALL_SERVICE_URL, "Constructor call service url is not set in env"

    SMARTZ_SOLC_PATH = '/usr/local/bin/solc' # set in dockerfile

    SMARTZ_ROOT_DIR = os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
    SMARTZ_CONSTRUCTOR_DATA_DIR = os.path.join(SMARTZ_ROOT_DIR, 'data')
    # inside docker in the same dir
    SMARTZ_JSON_SCHEMA_ROOT_PATH = os.path.join(SMARTZ_ROOT_DIR, 'json-schema')

    # all api methods will use thi prefix
    SMARTZ_API_PREFIX = 'api/'

    # business logic
    SMARTZ_COMMISSION = 0.2
    SMARTZ_COMMISSION_ADDRESS = '0xaacf78f8e1fbdcf7d941e80ff8b817be1f054af4'


class Development(Common):
    """
    The in-development settings and the default configuration.
    """
    DEBUG = True

    INTERNAL_IPS = [
        '127.0.0.1'
    ]

    INSTALLED_APPS = Common.INSTALLED_APPS + [
    #    'debug_toolbar'
    ]
    MIDDLEWARE = Common.MIDDLEWARE + [
    #    'debug_toolbar.middleware.DebugToolbarMiddleware'
    ]


class DevelopmentLocal(Development):
    """
    Development on local machine throw runserver
    """

    # local machine paths
    SMARTZ_MONGO_HOST = '127.0.0.1'
    SMARTZ_SOLC_PATH = 'solc'

    # for local development in repo path
    SMARTZ_JSON_SCHEMA_ROOT_PATH = os.path.join(Development.SMARTZ_ROOT_DIR, '..', 'json-schema')


class Staging(Common):
    """
    The in-staging settings.
    """

    ALLOWED_HOSTS = ['staging.smartz.io']

    # Security
    SESSION_COOKIE_SECURE = values.BooleanValue(True)
    SECURE_BROWSER_XSS_FILTER = values.BooleanValue(True)
    SECURE_CONTENT_TYPE_NOSNIFF = values.BooleanValue(True)
    SECURE_HSTS_INCLUDE_SUBDOMAINS = values.BooleanValue(True)
    SECURE_HSTS_SECONDS = values.IntegerValue(31536000)
    SECURE_REDIRECT_EXEMPT = values.ListValue([])
    SECURE_SSL_HOST = values.Value(None)
    SECURE_SSL_REDIRECT = values.BooleanValue(True)
    SECURE_PROXY_SSL_HEADER = values.TupleValue(
        ('HTTP_X_FORWARDED_PROTO', 'https')
    )


class Production(Staging):
    """
    The in-production settings.
    """

    ALLOWED_HOSTS = ['smartz.io', 'preprod.smartz.io']

    pass

class Testing(DevelopmentLocal):
    """
    The tests settings.
    """

    IS_TESTING = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': 'mydatabase',
        }
    }
