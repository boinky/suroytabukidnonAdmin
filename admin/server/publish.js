Meteor.publish("muni", function(){
	return Municipality.find({});
});

Meteor.publish("estab", function(){
	return Establishment.find({});
});
	
Meteor.publish("files", function(){
	return Files.find({});
});
	