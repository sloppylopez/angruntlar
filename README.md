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
