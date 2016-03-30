Template.loginTemplate.events({
  "submit .form-signin": function (event) {
    event.preventDefault();
  },
  "click .btnLogin": function (event, template){
    var username, password;
    username = template.$("#inputEmail");
    password = template.$("#inputPassword");
    Meteor.loginWithPassword(username.val(), password.val());
  }
});
