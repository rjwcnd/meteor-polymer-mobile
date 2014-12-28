
Initial.prototype.toast = {
  green: function( text) {
    Blaze.render(Template.toastgreen, document.body);
    document.getElementById('toastgreen').setAttribute('text', text);
    document.getElementById('toastgreen').show();
  },
  red: function( text) {
    Blaze.render(Template.toastred, document.body);
    document.getElementById('toastred').setAttribute('text', text);
    document.getElementById('toastred').show();
  }
}