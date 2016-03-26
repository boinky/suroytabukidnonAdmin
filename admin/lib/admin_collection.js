Municipality = new Mongo.Collection("muni");
Establishment = new Mongo.Collection("estab");


Files = new FS.Collection("files", {
  stores: [
    new FS.Store.GridFS("files"),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'], //allow only images in this FS.Collection
      extensions: ['jpg','jpeg','gif','png']
    },
    onInvalid: function (message) {
       if (Meteor.isClient) {
         alert(message);
       } else {
         console.log(message);
       }
    }
  }
});

if (Meteor.isClient) {

}



if(Meteor.isServer){

  Files.allow({
    insert: function(){
      return true;
    },
    update: function(){
      return true;
    },
    remove: function(){
      return true;
    },
    download: function(){
      return true;
    }
  });

  Files.deny({
    insert: function(){
      return false;
    },
    update: function(){
      return false;
    },
    remove: function(){
      return false;
    },
    download: function(){
      return false;
    }
  });

  Municipality.allow({
		insert: function(){
			return true;
		},

		update: function(){
			return true;
		},

		remove: function(){
			return true;
		}
	});
  Establishment.allow({
    insert: function(){
      return true;
    },

    update: function(){
      return true;
    },

    remove: function(){
      return true;
    }
  });


}