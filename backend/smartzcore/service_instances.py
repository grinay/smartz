# di
import logging

from django.conf import settings


class WithEngine:
    @property
    def constructor_engine(self):
        if not hasattr(self, '_constructor_engine'):
            from constructor_engine.engine import SimpleStorageEngine
            self._constructor_engine = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})

        return self._constructor_engine


class WithLogger:
    def set_logger_name(self, logger_name=None):
        self._logger_name = logger_name

    @property
    def logger(self) -> logging.Logger:
        if not hasattr(self, '_logger'):
            if hasattr(self, '_logger_name') and self._logger_name:
                logger_name = self._logger_name
            else:
                logger_name = "{}.{}".format(
                    self.__class__.__module__,
                    self.__class__.__name__
                )

            self._logger = logging.getLogger(logger_name)

        return self._logger