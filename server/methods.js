Meteor.methods({

  //Creating Users
  // username -string
  // email -string
  // password -string
  // profile -object
  secureCreateUser: function(username, email, password, profile){
    var user_id = Accounts.createUser({
      username: username,
      email: email,
      password: password,
      profile: profile
    });
  },

  addMuni: function( mMunicipality, mDistrict, mBarangay, mMayor, mVMayor, mPop_total, mPop_dens, mZipcode, mIncomeClass, m_ID){
     console.log("save clicked");
      
      var mID = m_ID;

    Municipality.insert({
      m_ID: mID,
      mMunicipality: mMunicipality,
      mDistrict: mDistrict,
      mBarangay: mBarangay,
      mMayor: mMayor,
      mVMayor: mVMayor,
      mPop_total: mPop_total,
      mPop_dens: mPop_dens,
      mZipcode: mZipcode,
      mIncomeClass: mIncomeClass,
      createdAt: new Date()
    });

    Files.update({_id: mID } ,{$set: {
      types: 'used'
    }});

  },
  addEstab: function(Category, Name, Description, Municipality, Barangay, Street, Longi, Lati, ConNum, FaxNum, Email, Website, es_ID){
       
       var eID = es_ID;

       console.log("save clicked");

       Establishment.insert({ 
          e_ID: eID,
          eCategory: Category,
          eName: Name,
          eDescription: Description,
          eMunicipality: Municipality,
          eBarangay: Barangay,
          eStreet: Street,
          eLongi: Longi,
          eLati: Lati,
          eConNum: ConNum,
          eFaxNum: FaxNum,
          eEmail: Email,
          eWebsite: Website,
          createdAt: new Date()
        });

    Files.update({_id: eID } ,{$set: {
      types: 'used'
    }});

  },
  delEstab: function(eID){
       Establishment.remove({_id: eID});
  },
  addEve: function(eventID, eName, eDescription){
      
      var eveID = eventID;

      console.log("clicked saved");
    
    Event.insert({
        eventID: eveIDs,
        eName: eName,
        eDescription:eDescription
    });
  },

  MuniUpdate: function(mMayor, mVMayor, mPop_total, mPop_dens, e_id){

    console.log("Municipality successfully updated!");
    
   Municipality.update({
              mMayor:mMayor,
              mVMayor:mVMayor,
              mPop_total:mPop_total,
              mPop_dens:mPop_dens
   });

  },

  EstabUpdate: function(){

  },
  EveUpdate: function(){

  }
  
});
