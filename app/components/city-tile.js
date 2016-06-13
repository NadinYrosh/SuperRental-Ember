
// destroyCity(city) {
//   var rental_deletions = city.get('rentals').map(function(rental) {
//     return rental.destroyRecord();
//   });
//   Ember.RSVP.all(rental_deletions).then(function() {
//     return city.destroyRecord();
//   });
//   this.transitionTo('city');
// }

import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    destroyCity(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
