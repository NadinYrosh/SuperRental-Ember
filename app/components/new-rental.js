import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    saveRentalAtRentalForm() {
      var rentalInput = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') :"",
      };
      this.set('addNewRental', false);
    //   if(params.owner === "" || params.city === "" || params.type === "" || params.image === "" || params.bedrooms === ""){
    //    return alert("Please enter something");
    //  }else{
    //    return params;
    //  }

      this.sendAction('saveRentalInsideCityRouteFromComponent', rentalInput);
    }
  }
});
