

Template.more.helpers({
  isCloud: function() {
    return Meteor.status().connected;
  }
});


Template.more.events({
  'click [id="cloudbtn"]': function() {
    IN.polymer.dropdownHeightBug('cloudmenu');
    document.getElementById('cloudmenu').toggle();
  },
  'click [id="setofflinebtn"]': function() {
    Meteor.disconnect();
    IN.toast.red('You are now disconnect from Meteor Server');
  },  
  'click [id="setonlinebtn"]': function() {
    Meteor.reconnect();
    IN.toast.green('You are now connected to Meteor Server');
  }
});