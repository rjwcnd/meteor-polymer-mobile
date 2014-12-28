
Template.sidebar.rendered = function(argument) {
  document.getElementById('navicon2').addEventListener('click', function() {
    if( document.getElementById('drawerPanel').getAttribute('forceNarrow') == 'false') {
      document.getElementById('drawerPanel').setAttribute('forceNarrow','true');
      document.getElementById('navicon2').setAttribute('icon','drawer');
    }
    else {
      document.getElementById('drawerPanel').setAttribute('forceNarrow','false');
      document.getElementById('navicon2').setAttribute('icon','check-box-outline-blank');
    }
  });
}

Template.sidebar.events({
  'click [label="Module1"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/module1');
  },  
  'click [label="Module2"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/module2');
  },
  'click [label="Refill"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/refill');
  },
  'click [label="About"]': function() {
    IN.layout.toggleDrawerPanel();
    Blaze.render(Template.about, document.body);
  }
});

