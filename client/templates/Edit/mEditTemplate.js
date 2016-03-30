Meteor.subscribe("muni");

Template.edit.events({
	"click #mEdit": function(e, t){
		var e_id = $("#efileID").val();
		var mMayor = $(".eM_mayor").val();
		var mVMayor = $(".eM_vmayor").val();
		var mPop_total = $(".eM_pop_total").val();
		var mPop_dens = $(".eM_pop_density").val();
		
		/*console.log(mMunicipality);
		console.log(mDistrict);
		console.log(mBarangay);
		console.log(mMayor);
		console.log(mVMayor);
		console.log(mPop_total);
		console.log(mPop_dens);
		console.log(mZipcode);
		console.log(mIncomeClass);*/
		console.log(this);
		console.log("e", e);
		console.log("t", t);
/*
		var dataUpdate = {
						  mMayor:mMayor,
						  mVMayor:mVMayor,
						  mPop_total:mPop_total,
						  mPop_dens:mPop_dens,

						};*/
		/*Municipality.update(e_id, 
		{
			$set: dataUpdate
		});*/

		Meteor.call('MuniUpdate', mMayor, mVMayor, mPop_total, mPop_dens, e_id);

		// mMunicipality: $(".eM_name").val(),
		// 		mDistrict: $(".eM_district").val(),
		// 		mBarangay: $(".eM_barangay").val(),
		// 		mMayor: $(".eM_mayor").val(),
		// 		mVMayor: $(".eM_vmayor").val(),
		// 		mPop_total: $(".eM_pop_total").val(),
		// 		mPop_dens: $(".eM_pop_density").val(),
		// 		mZipcode: $(".eM_zip_code").val(),
		// 		mIncomeClass: $(".eM_income_class").val()
	}
});