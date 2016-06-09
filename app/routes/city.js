import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    // is this params from userInput of rental form, or city form???
    //this params comes from router inside Ember - do not change this one
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
      saveRentalInsideCityRouteFromTemplate(rentalInput) {


        var newRental = this.store.createRecord('rental', rentalInput);
        var city = params.city;
        city.get('rentals').addObject(newRental);
        newRental.save().then(function() {
          return city.save();
        });
        this.transitionTo('city', params.city);
      }
    }
});
