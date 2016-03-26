Meteor.subscribe("estab");
Meteor.subscribe("files");

Template.AddEstablishment.events({
  'submit .addEstablishment' : function (e) {
    e.preventDefault();
    var Category = $("#category-select").val();
    var Name = $(".E_name").val();
    var Description = $(".E_description").val();
    var Municipality = $(".Ea_municipality").val();
    var Barangay = $(".Ea_barangay").val();
    var Street = $(".Ea_Street").val();
    var Longi = $(".Ea_longi").val();
    var Lati = $(".Ea_lati").val();
    var ConNum = $(".Ec_cont_no").val();
    var FaxNum = $(".Ec_Fax_no").val();
    var Email = $(".Ec_email").val();
    var Website = $(".Ec_website").val();
    var es_ID = $("#E_fileID").val();

    Meteor.call('addEstab', Category, Name, Description, Municipality, Barangay, Street, Longi, Lati, ConNum, FaxNum, Email, Website, es_ID);

  },

  'change .E_fileUpload': function(e, t){
    FS.Utility.eachFile(e, function(file) {
      var enewFile = new FS.File(file);
      enewFile.types = 'unused';

      var efileId = Files.insert(enewFile, function (err, fileObj) {
        if(err){
          console.log(err);
        }else{
          console.log('inserted!');
        }
      });

    });
  }

});

Template.AddEstablishment.helpers({
  categories: function(){
    return [
      "Landmarkds",
      "Accomodation",
      "Food",
      "recreational",
    ]
  }

});

Template.resultsEstablishment.events({
  
  'click .ebtnDelete': function(e){
      Meteor.call('delEstab');
    }

});

Template.resultsEstablishment.helpers({
  eimgResults: function(){
    return Files.findOne({types: 'unused'});
  },
  eimg: function(){
    return Files.findOne({_id: this.e_ID});
  },
   eresults: function(){
    return Establishment.find({},
      {sort:
        {
          createdAt: -1
        }

      });
  },
  
});



/*Meteor.subscribe("data");
Meteor.subscribe("files");

Template.AddEstablishment.events({
  'submit .addEstablishment': function (event) {
    event.preventDefault();
    console.log("save clicked");
    Data.insert({ 
      eCategory: $("#category-select").val(),
      eName: $(".E_name").val(),
      eDescription: $(".E_description").val(),
      eMunicipality: $(".Ea_municipality").val(),
      eBarangay: $(".Ea_barangay").val(),
      eStreet: $(".Ea_Street").val(),
      eLongi: $(".Ea_longi").val(),
      eLati: $(".Ea_lati").val(),
      eConNum: $(".Ec_cont_no").val(),
      eFaxNum: $(".Ec_Fax_no").val(),
      eEmail: $(".Ec_email").val(),
      eWebsite: $(".Ec_website").val(),
      e_ID: $(".E_fileID").val(),
      createdAt: new Date()
    });

    Files.update({_id: $(".E_fileID").val() } ,{$set: {
      types: 'used'
    }});
  },

  'change .E_fileUpload': function(event, t){
    FS.Utility.eachFile(establishment, function(file) {
      var eNewFile = new FS.File(file);
      eNewFile.types = 'unused';

      var e_fileId = Files.insert(eNewFile, function (err, fileObj) {
        if(err){
          console.log(err);
        }else{
          console.log("inserted !");
        }
      });

    });
  }

});

Template.AddEstablishment.helpers({
  categories: function(){
    return [
      "Landmarkds",
      "Accomodation",
      "Food",
      "recreational",
    ]
  }

});

Template.resultsEstablishment.events({
  
  'click .ebtnDelete': function(event){
   Data.remove(this._id);
    }

});

Template.resultsEstablishment.helpers({
  eimgResults: function(){
    return Files.findOne({types: 'unused'});
  },
  eimg: function(){
    return Files.findOne({_id: this.e_ID});
  },
  eresults: function(){
    return Data.find({},
      {sort:
        {
          createdAt: -1
        }

      });
  },
  
});

*/