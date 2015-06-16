#!/bin/bash
#Pre-requisites
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
#sudo apt-get install -y -qq build-essential TODO check if mandatory
sudo apt-get install -y -qq nodejs npm wget curl git python graphicsmagick

#Install travis-cli command line to be able to encrypt api_keys in the Travis build
sudo gem install travis
#Encrypt your code climate key for Travis build and add it automatically to your .travis.yml
#remember explicitly declare this variables in
#https://travis-ci.org/<YOUR_GIT_USER>/<YOUR_GIT_PROJECT_NAME>/settings/env_vars
travis encrypt CODECLIMATE_REPO_TOKEN=c73a9cf87d3e9233c20179c3d2b496dd73d9f8ef5664ef8ebe5ebbd9765ef823 --add
travis encrypt FIREBASE_USER=sloppylopez --add
travis encrypt FIREBASE_PASSWORD=F1r3b4s3! --add

#Fix for node first install http://stackoverflow.com/questions/21168141/can-not-install-packages-using-node-package-manager-in-ubuntu
sudo ln -s /usr/bin/nodejs /usr/bin/node

#Install npm global dependencies
sudo npm install -g codeclimate-test-reporter grunt-cli bower firebase-tools yo generator-karma generator-angular karma-cli

#Check versions of installed dependencies
nodejs -v
npm -v
git --version
python --version
uname -r