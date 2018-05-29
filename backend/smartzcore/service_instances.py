# di
import logging

from django.conf import settings


class WithEngineMixin:
    @property
    def constructor_engine(self):
        from constructor_engine.engine import SimpleStorageEngine
        if not hasattr(self, '_constructor_engine'):
            self._constructor_engine = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})

        return self._constructor_engine


class WithLogger:
    def set_logger_name(self, logger_name=None):
        self._logger_name = logger_name

    @property
    def logger(self) -> logging.Logger:
        if not hasattr(self, '_logger'):
            logger_name = self._logger_name \
                if hasattr(self, '_logger_name') and self._logger_name \
                else "{}.{}".format(
                    self.__class__.__module__,
                    self.__class__.__name__
                )

            self._logger = logging.getLogger(logger_name)

        return self._logger