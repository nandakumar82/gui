#! /bin/bash -x
set -e #stop on all ERRORS

# debug
pwd
ls -l
# check npm version
npm -v

echo "building project..."
# install application dependencies
npm install
# run unit tests
# ng test
# run integration / functional tests
# ng e2e
# build application
ng build
# check if /dist folder contains artifact files
ls -l dist

if [ ! -z "${VERSION}" ]; then
  TAG=${VERSION}
elif [ ! -z "${1}" ]; then
  TAG=${1}
else
  echo "Tag not set in {VERSION} variable or input parameter"
  exit 1
fi

echo "Tag name: ${TAG}"

NAME=nginx-angular2-webapp

##############################################################
# Image Build
##############################################################

echo "Start image build..."

repo_url=769400344718.dkr.ecr.us-west-2.amazonaws.com

echo "Loging into ECR (west)..."
aws ecr get-login --region us-west-2 | bash

echo "Building Docker image..."
docker build -t ${NAME} .

echo "Tagging our image..."
docker tag ${NAME} ${repo_url}/${NAME}:${TAG}

echo "Pushing our image to repo..."
docker push ${repo_url}/${NAME}:${TAG}

echo "Build completed!"
