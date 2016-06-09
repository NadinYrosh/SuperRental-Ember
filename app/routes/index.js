import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('city');
  }, //Comma is for listing more than just the model, doesn't break anything by having it in Ember, might cause problems in Angular

  actions: {
    saveCityOnCityRoute(cityInput){
      var newCity = this.store.createRecord('city', cityInput);
      newCity.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
