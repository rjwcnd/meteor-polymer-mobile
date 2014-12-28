# Meteor Polymer mobile
A basic example of Meteor with Polymer for web and mobiles

Demo: http://polymer-mobile.meteor.com/

## Installation
Clone the repository http://github.com/appshore/meteor-polymer-mobile
The following task aren´t required if the repository is fully cloned

Add Meteor packages:
```
meteor add differential:vulcanize
meteor add iron-router
```

Install Polymer components with [bower](http://bower.io/)
Check the config files bower.json and .bowerrc
```
bower install
```
or
```
bower update
```

## Running on your computer
Start the Meteor server
```
meteor
```
From your browser
```
http://localhost:3000
```

## Running on meteor.com
Deploy the application on Meteor server
```
meteor deploy your-own-subdomain.meteor.com
```
From your browser
```
http://your-own-subdomain.meteor.com
```

## Running on Android or IOS mobile with Cordova
Follow instructions from [Meteor Tutorial > Running on mobile](https://www.meteor.com/try/7)

## Trigger a notification from Mongo shell
```
use meteor;
db.notifications.insert({name: 'Not 1'});
```
Check the app

