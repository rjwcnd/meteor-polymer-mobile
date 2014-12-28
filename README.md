# Polymer mobile

A basic sample of Meteor with Polymer for web and mobiles

## Installation

Clone the repository [appshore/polymer-mobile](http://github.com/appshore/polymer-mobile)


## Run on your computer

Start the Meteor server
```
meteor
```

From your browser
```
http://localhost:3000
```

### Trigger a notification
```
meteor mongo
meteor:PRIMARY> db.notifications.insert({name: 'Not 1'});
```
Check in the app

## Run on meteor.com

Deploy the application on Meteor server
```
meteor deploy your-own-subdomain.meteor.com
```

From your browser
```
http://your-own-subdomain.meteor.com
```

## To run on Android or IOS mobiles

Follow instructions from [Meteor Tutorial](https://www.meteor.com/try/7)

