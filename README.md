Polymer mobile
===========

A basic sample of Meteor with Polymer for web and mobiles

## Installation

Clone the repository `https://github.com/appshore/polymer-mobile`
From the root directory of the meteor app, run `bower install` to install Polymer, web components, & vulcanize


## Run on your computer

Start the Meteor server
```
meteor
```

From your browser
```
http://localhost:3000
```

## Run on meteor.com

Deploy the application on Meteor server
```
meteor deploy your-own-subdomain.meteor.com
```

From your browser
```
http://your-own-subdomain.meteor.com
```

## On Android mobile connected via usb

Install the Android sdk
```
meteor install-sdk android --verbose
```

Use your local meteor server
```
meteor run android-device
```

Use your meteor.com
```
meteor run android-device --mobile-server=https://your-own-subdomain.meteor.com
```

## On IOS mobile connected via usb

Install the IOS sdk
```
meteor install-sdk ios --verbose
```

Use your local meteor server
```
meteor run ios-device
```

Use your meteor.com server 
```
meteor run ios-device --mobile-server=https://your-own-subdomain.meteor.com
```

