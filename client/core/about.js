Template.about.rendered = function() {
  document.getElementById('about').toggle();
}

Template.about.events({ 
  'core-overlay-close-completed':function(e) {
    console.log('Close '+e.currentTarget.id);
    e.currentTarget.remove();
  }
});