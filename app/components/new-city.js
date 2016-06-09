import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    showCityForm() {
      this.set('addNewCity', true);
    },

    saveCity() {
      var cityInput = {
        name: this.get('cityname') ? this.get('cityname') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addNewCity', false);

      this.sendAction('saveCity', cityInput);
    }
  }
});
