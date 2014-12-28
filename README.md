# Meteor Polymer mobile
A basic sample of Meteor with Polymer for web and mobiles

## Requirements
Meteor packages installed by default: 
- differential:vulcanize
- ecwyne:polymer
- ecwyne:polymer-elements
- iron-router
Polymer components are installed with bower.
In both cases if you clone the git you won't need to reinstall them.

## Installation
Clone the repository [appshore/meteor-polymer-mobile](http://github.com/appshore/meteor-polymer-mobile)

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

## Running on Android or IOS mobile
Follow instructions from [Meteor Tutorial > Running on mobile](https://www.meteor.com/try/7)

## Trigger a notification from Mongo shell
```
use meteor;
db.notifications.insert({name: 'Not 1'});
```
Check the app

