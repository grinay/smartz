#!/bin/sh

if [[ -n "$BASIC_AUTH" ]];
	then
		echo -e 'auth_basic "Mixbytes staging zone";\nauth_basic_user_file htpasswd;' > /etc/nginx/basic_auth.conf;
		echo -e "$BASIC_AUTH" > /etc/nginx/htpasswd;
	else
		echo '' > /etc/nginx/basic_auth.conf;
fi

nginx-debug -g "daemon off;"
