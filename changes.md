## 1.0.0-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * isolated from docker, part of a big refactor im doing for deploying the app in digital ocean droplet

## 0.1.6-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * Node v12
        * improved grunt-responsive-images workflow

## 0.1.5-feel-like-a-sir
    KNOWN BUGS:
        * in grunt-responsive-images there is a 'limitation' if you want to add a new folder
          for example 50x50, you have to MANUALLY TELL GRUNT the existence of this new folder
          it takes you 2 seconds to adapt it following the implemented example, but it would be great to
          make this part transparent to the dev as well, in that case it would be a 'magical' feature
          i will change this soon, but it has low priority.
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * grunt-responsive-images: this is yet another nice boiler plate removal out-of-the-box
          just put any image in the folder 'images' under a folder specifying the width
          and heigh '38x38', and grunt will take them, and resize them automatically, you
          will keep the originals in local, but running the project locally will
          use the resized ones, and he will only upload the resized ones to Firebase
          which makes the process transparent and optimized, PLUS the images of your web
          ARE 100% optimized, in size and compression, the project raised to B/B grade in
          GTmetrix, the goal is A/A as you can image ;)
          http://gtmetrix.com/reports/sloppylopez.firebaseapp.com/zWb4cfjp
       
        
## 0.1.4-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * 100x100 Yeoman compliant
        * Added home page

## 0.1.3-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * Refactor and cleaning of the tests, same coverage, less lines of code

## 0.1.2-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * 100% unit test coverage reached!!!

## 0.1.1-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * grunt-karma background test does not generate reports
          
    FEATURES ADDED:
        * Added grunt-karma to run headed browsers in background mode, this will be very interesting if 
          it runs in Travis cos I can test much more browsers 'for the same price' in terms of speed
          
        * downgrade to angular 1.3.15 for a problem with ng-messages
          
    FIXED BUGS
        * Problem with Angular 1.4.0 and ng-messages, stickying with angular 1.3.15 temporaly
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

## 0.1.0-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
          
    FIXED BUGS
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

    FEATURES ADDED:
        * Increase coverage integration test
        * Refactor, simplified logic, taking out common factor of code
        * Bower dependencies updated, including Angular 1.4.0
        * Removed unused dependencies for testing, will use Karma with Jasmine for simplicity
        
## 0.0.9-feel-like-a-sir
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

## 0.0.8-feel-like-a-sir DO NOT USE THIS VERSION! I've discovered docker won't run because of Jenkins
    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor
        * Failed to download bootstrap-sass-official dependency in the CD
          process, but it is just a minor

    FIXED BUGS:
        * Incorrect Firebase params in constants.js

## 0.0.6-feel-like-a-sir

    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          However we will fix this using Jenkins

    FEATURES ADDED:
        * Added full Travis CI and CD integration

## 0.0.5-feel-like-a-sir

    KNOWN BUGS:
        * Nasty issue that i don't like, i will think what to do with this
          and prepare travis to test ONLY angular, because it seems he it's not able to test
          the docker build, shame...
          https://github.com/travis-ci/travis-ci/issues/1196
          
    KNOWN BUGS:          
        * Fixed login bug in angular client, now you can log 
          from any device

## 0.0.4-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Cleaned and documented and running out of the box

## 0.0.3-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Added Karma to prerequisites_install.sh

## 0.0.2-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Working 100x100 out of the box following the instructions

## 0.0.1-feel-like-a-sir

    KNOWN BUGS:
        * Can't log in with mobile devices

    BUGS FIXED:
        * Wrong redirection after authWithPassword
        * Spinner was not fitting perfectly again...

## 0.0.1-alpha

    BUGS FIXED:
        * Fixed failure in docker build the stop of jdk distribution from docker repo
        * Spinner was not fitting perfectly.

    FEATURES:Build frameworks working:Docker, Grunt and Yeoman
             Test framework working:Karma combined with Mocha and Chai
             Angular-Firebase integration 50%, remains undone 'chat' and 'three-way data binding'
             Angular client working including:
                Full user authentication
                Rss filtering using the elastic search in the docker stack
                Kibana working
                Logstash working
                Elastic Search working
                Nodeapi persisting rss in the EL

    KNOW ISSUES:The docker elk stack it's not online yet... i will deploy in Heroku
                or AWS ASAP!!!! :)
