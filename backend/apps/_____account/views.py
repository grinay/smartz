#!/usr/bin/env python3                                                                                                                                                                                             import re

from django.conf import settings

from rest_framework import generics

from pymongo import MongoClient

from utils.responses import ok_response, error_response

# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db


class AccountInfoView(generics.GenericAPIView):
    def __init__(self, **kwargs):
        super(AccountInfoView, self).__init__(**kwargs)

    def get(self, request,*args,**kwargs):
        account_id = request.query_params.get('account_id')
        if account_id is None:
            return error_response("Empty account_id parameter")

        users_tbl = db.users
        # FIXME: by account_id we use now EMAIL!
        account = users_tbl.find_one({'mail': account_id})
        if account is None:
            return error_response("Account '{}' not found".format(account_id))
        
        return ok_response(account)


class AccountRegisterView(generics.GenericAPIView):
    def __init__(self, **kwargs):
        super(AccountRegisterView, self).__init__(**kwargs)

    def get(self, request,*args,**kwargs):
        users_tbl = db.users
        user_mail = request.query_params['mail']
        user_name = request.query_params['name']
        user_pass = request.query_params['pass']

        if user_mail is None:
            return error_response("'mail' param not passed")

        if users_tbl.find_one({'mail': user_mail}) is not None:
            return error_response('user already exists')

        user_record = {'mail': user_mail, 'name': user_name, 'pass': user_pass}

        users_tbl.insert_one(user_record)
        return ok_response({})
