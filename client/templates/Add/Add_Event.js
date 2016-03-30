Meteor.subcribe("eve");
Meteor.subscribe("files");

Template.eventTemplate.events({
	"click #addEvent": function(e){
    
		var eventID = $("#eventfileID").val();
		var eName = $("#eventName").val();
		var eDescription = $("#eventDesc").val();

		Meteor.call('addEve', eventID, eName, eDescription);
	},
	'change .eventfileUpload': function(e, t){
    FS.Utility.eachFile(e, function(file) {
      var eventnewFile = new FS.File(file);
      eventnewFile.types = 'unused';

      var efileId = Files.insert(eventnewFile, function (err, fileObj) {
        if(err){
          console.log(err);
        }else{
          console.log('inserted!');
        }
      });

    });
  }


});
Template.resultsEvent.events({
  "click #ebtnDelete": function(e){
      Establishment.remove({_id: this._id});
  }

});
Template.resultsEvent.helpers({

	EventimgResults: function(){
    return Files.findOne({types: 'unused'});
  },
  eventImg: function(){
    return Files.findOne({_id: this.eventID});
  },
   eventResults: function(){
    return Event.find({},
      {sort:
        {
          createdAt: -1
        }

      });
  }
});