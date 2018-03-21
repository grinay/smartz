#!/usr/bin/env python3

import sys

import requests


method = sys.argv[1]
args = sys.argv[2]

result = requests.post('http://localhost:3000/prod/' + method, args)
if 200 == result.status_code:
    print(result.text)
else:
    print('unexpected status: {}'.format(result.status_code))

