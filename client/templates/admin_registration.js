Template.signupTemplate.events({
  'submit .form-signup': function (event, template) {
    event.preventDefault();
    var username, email, password;
    username = template.$("#inputnewUser");
    email = template.$("#inputnewEmail");
    password = template.$("#inputnewPassword");
    Meteor.call("secureCreateUser", username.val(), email.val(), password.val(), {name: ""}, function(err){
      if(err){
        alert(err.reason);
      }else{
        Router.go("/");
      }
    });
  }
});
