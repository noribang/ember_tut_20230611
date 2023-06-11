import Ember from 'ember';

const {
  Controller,
  get,
  computed: { alias }
} = Ember;

export default Controller.extend({
  rentals: alias('model'),
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return get(this, 'store').query('rental', { city: param });
      } else {
        return get(this, 'store').findAll('rental');
      }
    }
  }
});
