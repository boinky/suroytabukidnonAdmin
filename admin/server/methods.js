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
    
    Municipality.insert({
      mMunicipality: mMunicipality,
      mDistrict: mDistrict,
      mBarangay: mBarangay,
      mMayor: mMayor,
      mVMayor: mVMayor,
      mPop_total: mPop_total,
      mPop_dens: mPop_dens,
      mZipcode: mZipcode,
      mIncomeClass: mIncomeClass,
      m_ID: m_ID,
      createdAt: new Date()
    });

    Files.update({_id: m_ID } ,{$set: {
      types: 'used'
    }});

  },
  addEstab: function(eCategory, eName, eDescription, eMunicipality, eBarangay, eStreet, eLongi, eLati, eConNum, eFaxNum, eEmail, eWebsite, e_ID){
       
       console.log("save clicked");

        Establishment.insert({ 
          eCategory: eCategory,
          eName: eName,
          eDescription: eDescription,
          eMunicipality: eMunicipality,
          eBarangay: eBarangay,
          eStreet: eStreet,
          eLongi: eLongi,
          eLati: eLati,
          eConNum: eConNum,
          eFaxNum: eFaxNum,
          eEmail: eEmail,
          eWebsite: eWebsite,
          e_ID: e_ID,
          createdAt: new Date()
        });

    Files.update({_id: e_ID } ,{$set: {
      types: 'used'
    }});

  },
  delEstab: function(e_ID){
       Municipality.remove({_id: this._id});
  },


});
