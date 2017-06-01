#!/bin/sh

export NGINX_APPLICATION_NAME=${NGINX_APPLICATION_NAME:-angular2-webapp}

# run confd to render out the config
confd -onetime -backend env

/bin/sh
