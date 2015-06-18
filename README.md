## Angular + Firebase + Nodejs + ELK + Docker + Docker-Compose + RSS + Travis
[![Code Climate](https://codeclimate.com/github/sloppylopez/angularclient/badges/gpa.svg)](https://codeclimate.com/github/sloppylopez/angularclient)
[![Travis](https://travis-ci.org/sloppylopez/angularclient.svg)](https://travis-ci.org/sloppylopez/angularclient)
[![Test Coverage](https://codeclimate.com/github/sloppylopez/angularclient/badges/coverage.svg)](https://codeclimate.com/github/sloppylopez/angularclient/coverage)
<a href="http://gruntjs.com/"><img src="https://cdn.gruntjs.com/builtwith.png"></a><a href="https://github.com/sloppylopez/angularclient/releases/tag/v1.0.0-feel-like-a-sir">  v1.0.0-feel-like-a-sir</a> 

<img src="https://github.com/sloppylopez/angularclient/blob/master/app/images/100x100/feellikeasir.jpg" alt="sloppylopez.com"/>

<a href="http://sloppylopez.com/">sloppylopez.com</a>

##FEATURES SO FAR:
1) CI and CD with Travis, Code climate and Firebase, plus code climate it's integrated with github issues
   so you can create a github issue when quality of code decreased after a PR in 1 click
   
2) 100% Unit Test coverage.

3) Scaffolding of angular client done with Yeoman (default angular generator), moreover if you want to
   create a new controller, only doing 'yo angular:controller name' Yeoman will create the controller
   and the test spec for you!, this is a nice time saver in develop time.

4) User management, including email verification fully integrated using angularfire

5) Plain default mild installation of all components, bower, npm, docker which
  means the whole project is mainstreamed at maximum, no hacky stuff, no wheel
  reinventions (at least that I am aware of)
  
6) Run in almost all devices and browsers(IE8+ and all the rest) and it's responsive

7) Completely logicless form validation using new angular 1.3 directive ng-messages

8) grunt-responsive-images: this is yet another nice boiler plate removal out-of-the-box
      just put any image in the folder 'images' under a folder specifying the width
      and heigh '38x38', and grunt will take them, and resize them automatically, you
      will keep the originals in local, but running the project locally will
      use the resized ones, and he will only upload the resized ones to Firebase
      which makes the process transparent and optimized, PLUS the images of your web
      are 100% optimized in terms of size and compression, the project raised to B/B grade in
      GTmetrix, the goal is A/A as you can image ;)
      http://gtmetrix.com/reports/sloppylopez.firebaseapp.com/zWb4cfjp

This 2 lines make all the validation, including displaying the custom error messages for each case
which completely erases the boiler plate of form validation, this is the so called 'angular way'
>< input id="username" type="email" name="email" class="form-control" ng-model="user.email" required email/>

>< div ng-messages="loginForm.email.$error" ng-messages-include="views/errors.html" class="errors"></div>
   
##INTENDED FEATURES:   

1)Manage jenkins and docker cluster with Rancher

##INTRO:
Front-End Angular, Back-End Nodejs, Docker running 3 servers with ELK stack orchestrated with Docker-compose

This project it's 3 virtual machines build with docker and docker-compose for the orchestration of the 3 services, Elastic search, Logstash and Kibana, also there is a front-end angular client, and a backend nodejs that includes a elastic search client to consume rss from any website and persist them in the EL in a bulk process, then you can visualize them in the angular frontend and do the tipical text search over the rss's

It can be used as a seed for a project with that structure or similar, it saves a lot of 'default work' to set everything together.

There are 2 main goals in this project

1)Create a 'seed' that can be reused everytime you need to build a web-app with similar characteristics
like in this case angular, node and elk

2)Use the finished version of this project to build something over it, like for example without
entering yet in many details, extract info from the rss news stored with Spark or a similar technology
IN REAL TIME

This are the 3 separate parts :

##angularclient
Implemented using Yeoman, mild default installation, it uses Karma for testing and Grunt for building
Includes angular-fire a implementation of firebase client for angular, we use it as a Baas (Backend
as service), this is much more than a database, you can deploy you project in production with 1
command, it has a nice web interface to maintain the back-end, including non-google-web-analytics,
user management, testing console, and many nice options that erase the boiler plate of 'deploying in
prod'/'managing a server'/'managing a backend' for your FRONT-END application, it simply works out of the box
the project has implemented USER EMAIL VALIDATION using firebase Baas magic and angularfire modules.
###*See how to run below

##Travis CI-CD cycle explained
  1) We assume NO developer can commit directly to master
  
  2) So when a new development comes we will do it in a branch
  
  3) After pushing the branch and creating the PR, travis will jump
     over the commit and will try to make a build
     
  4) The build is controlled by .travis.yml file, it will try to 
     install the dependencies first (Karma, Node, Bower and so on)
     after that, he will do 'npm test', which will call our karma tests
     using PhantomJS headless WebKit, if the tests pass it will 
     generate a coverage report in lcov format using Istambul, 
     and it will be sent to Code Climate, this entire process will be 
     the CI
     
  5) After 4) we know our PR it's 'safe' to merge (assuming we had 100% 
     coverage and good e2e test), therefore we can go to github and merge 
     the PR to master, after doing this Travis will jump over the commit 
     again, and try to build again, however this time, if the build it's ok 
     and the test pass it will do a 'grunt build' to minify static resources 
     and he will deploy the resulting 'dist' folder to Firebase, this process 
     is the CD
     
  6) After merging the PR into master another process get fired, this time
     code climate will jump over the commit to master and will run the quality
     code revision, if it finds some decrease in the quality, you can open a
     github issue with 1 click
     
  7) In case of disaster(which it's almost impossible) we can always go to 
     Firebase website and undo the last release with 1 click, which is another
     great feature of Firebase BaaS skills.
     
  8) In case of ultra disaster (Firebase free version can get stuck if you deploy
     lots of times simultaneously). 
     Just do 'firebase delete-site' and deploy again, it will get solved.
        
  NOTES) 
  
  1) Notice that the integration between code climate and github issues 
     must be done manually by you, after that you will be able to open an 
     issue with 1 click, here is how to: 
     http://docs.codeclimate.com/article/226-github-issues-integration
 
  2) Notice that we do not have e2e test yet, I will do this using 
     Protractor but I believe we will have to modify .travis.yml to make 
     it work, however after releasing v0.0.6 my only goal it's to reach 
     100% coverage and add protractor test, so in the next weeks it will 
     be ready for action, and we will have a truly bullet-proof project 
     that can be used to build anything you want on top of it with the 
     security and confidence provided by our CI-CD cycle

##Prerequisites
   firebase account (free)
  
   bower
  
   npm
  
   grunt-cli
  
   travis account (free)
  
   karma-cli
    
   codeclimate-test-reporter
    
   firebase-tools

##Run angularclient
   grunt serve
  
##Deploy in prod
  There is no such thing! this is a CI-CD with 100% coverage :)_
  
  In case of need you can always do:
  
    grunt build
  
    firebase deploy
  
##Run the dist version (this is running the project like it is in production for debugging purposes)
  from angularclient folder...
  
  cd dist
  
  python -m SimpleHTTPServer
  
  Or more naturally
  
  grunt serve:dist


## ng-Notify Advanced Usage

https://github.com/matowens/ng-notify
