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

    # [+++]
    ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']

    # Application definition
    INSTALLED_APPS = [
        # 'django.contrib.admin',
        # 'django.contrib.auth',
        'django.contrib.contenttypes',
        # 'django.contrib.sessions',
        'django.contrib.messages',
        # 'django.contrib.staticfiles',

        'django_extensions',


        # 'apps.users',
    ]

    MIDDLEWARE = [
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        # 'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',

        'smartz.middleware.SmartzMiddleware',
        'smartz.middleware.JSONMiddleware'
    ]

    ROOT_URLCONF = 'smartz.urls'

    # TEMPLATES = [
    #     {
    #         'BACKEND': 'django.template.backends.django.DjangoTemplates',
    #         'DIRS': [],
    #         'APP_DIRS': True,
    #         'OPTIONS': {
    #             'context_processors': [
    #                 'django.template.context_processors.debug',
    #                 'django.template.context_processors.request',
    #                 'django.contrib.auth.context_processors.auth',
    #                 'django.contrib.messages.context_processors.messages',
    #             ],
    #         },
    #     },
    # ]

    WSGI_APPLICATION = 'smartz.wsgi.application'

    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    DATABASES = values.DatabaseURLValue(
        # 'postgresql://sprilutskiy:BuagfbdhiLOfjdhfo@localhost/sprilutskiy'
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

    # # Static files (CSS, JavaScript, Images)
    # # https://docs.djangoproject.com/en/2.0/howto/static-files/
    # STATIC_URL = '/static/'
    # STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    # STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

    # AUTH_USER_MODEL = 'users.User'

    # SMARTZ settings 
    SMARTZ_MONGO_HOST = 'mongo' # docker container

    SMARTZ_CONSTRUCTOR_CALL_SERVICE_URL = os.environ.get('CONSTRUCTOR_CALL_SERVICE_URL')
    assert SMARTZ_CONSTRUCTOR_CALL_SERVICE_URL, "Constructor call service url is not set in env"

    SMARTZ_SOLC_PATH = '/usr/local/bin/solc' # set in dockerfile

    SMARTZ_ROOT_DIR = os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
    SMARTZ_CONSTRUCTOR_DATA_DIR = os.path.join(SMARTZ_ROOT_DIR, 'data')
    # inside docker in the same dir
    SMARTZ_JSON_SCHEMA_ROOT_PATH = os.path.join(SMARTZ_ROOT_DIR, 'json-schema')

    # used for setup prefix on local development since thereis no nginx on it
    SMARTZ_API_PREFIX = ''


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

    SMARTZ_API_PREFIX = 'api/'

    # local machine paths
    SMARTZ_MONGO_HOST = '127.0.0.1'
    SMARTZ_SOLC_PATH = 'solc'

    # for local development in repo path
    SMARTZ_JSON_SCHEMA_ROOT_PATH = os.path.join(Development.SMARTZ_ROOT_DIR, '..', 'json-schema')


class Staging(Common):
    """
    The in-staging settings.
    """
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
    pass
