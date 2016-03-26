
// Router Before Action CallBack
Router.onBeforeAction(function() {
  //get current route name
  var route_name = Router.current().route.getName();
  //check if Login and in Signup Route
  if (!Meteor.userId() && route_name != "Signup") {
    //render loginTemplate
    this.render('loginTemplate');
  } else {
    this.next();
  }
});
/*
//Home Route
Router.route('/', function () {
  this.render("AddMunicipality");
}, {name: "Home"});

//Singup Route
Router.route('/signup', function () {
  this.render("signupTemplate");
}, {name: "Signup"});

// Router.route('/edit/:_id', {name: 'Edit'});
Router.route('/edit/:_id', function() {
  this.render('edit', {
    data: function () {
      return Data.findOne(this.params._id);
    }
  });
});*/

Router.map(function(){

  this.route('/dashboard', {path: '/'});


  this.route('edit', {
    path:'/edit/:_id',
    notFoundTemplate :'notFound',
    waitOn: function(){
      return Meteor.subscribe('data');

    },
    data: function(){
      return Data.findOne({_id: this.params._id});
    }
  });

  this.route('AddEstablishment',{
    path: 'AddEstablishment'
  });
  this.route('AddMunicipality',{
    path:'AddMunicipality'
  });
  this.route('layout', {
    path:'dashboard'
  });

});

//NOTE: pag click sa route kawaun ang ID then findOne para magamit na dayun ang tanan field.