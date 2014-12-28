

// Template.notifications.rendered = function(){
// }

Template.notifications.helpers({
  notifications: function() {
    return Notifications.find();
  },
  isNotifications: function() {
    return Notifications.find().count();
  }
});



Template.notifications.events({
  'click [id="notificationsbutton"]': function() {
    // var nots = Notifications.find().count();
    // if (nots < 2) {
    //   for (var i = 0; i < (10-nots); i++) {
    //     Notifications.insert({
    //       name: Random.id()
    //     });
    //   }
    // }

    IN.polymer.dropdownHeightBug('notificationsmenu');
    document.getElementById('notificationsmenu').toggle();
  },
  'click [data-del]': function() {
    Notifications.remove({_id: this._id});
    IN.polymer.dropdownHeightBug('notificationsmenu');
  }
});

