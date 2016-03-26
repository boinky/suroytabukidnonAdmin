Template.registerHelper('_', function() {
	return _;
});

Template.body.events({
	"click .userbtnLogout": function(){
		Meteor.logout();
	}
});