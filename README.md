# Polymer mobile
A basic sample of Meteor with Polymer for web and mobiles

## Installation
Clone the repository [appshore/polymer-mobile](http://github.com/appshore/polymer-mobile)

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

