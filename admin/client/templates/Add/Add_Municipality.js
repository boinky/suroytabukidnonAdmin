Meteor.subscribe("muni");
Meteor.subscribe("files");

Template.AddMunicipality.events({
  'submit .addMunicipality' : function (e) {
    e.preventDefault();
      var Municipality = $(".M_name").val();
      var District = $(".M_district").val();
      var Barangay = $(".M_barangay").val();
      var Mayor = $(".M_mayor").val();
      var VMayor = $(".M_vmayor").val();
      var Pop_total = $(".M_pop_total").val();
      var Pop_dens = $(".M_pop_density").val();
      var Zipcode = $(".M_zip_code").val();
      var IncomeClass = $(".M_income_class").val();
      var muni_ID = $(".mfileID").val();

   Meteor.call('addMuni', Municipality, District, Barangay, Mayor, VMayor, Pop_total, Pop_dens, Zipcode, IncomeClass, muni_ID);

  },

  'change .fileUpload': function(e, t){
    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);
      newFile.types = 'unused';

      var fileId = Files.insert(newFile, function (err, fileObj) {
        if(err){
          console.log(err);
        }else{
          console.log('inserted!');
        }
      });

    });
  }

});

Template.resultsMunicipality.events({
  
  'click .mbtnDelete': function(e){
   Municipality.remove(this._id);
    }

});

Template.resultsMunicipality.helpers({
  imgResults: function(){
    return Files.findOne({types: 'unused'});
  },
  img: function(){
    return Files.findOne({_id: this.m_ID});
  },
   results: function(){
    return Municipality.find({},
      {sort:
        {
          createdAt: -1
        }

      });
  },
  
});
