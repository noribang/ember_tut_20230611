import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  owner: attr('string'),
  city: attr('string'),
  type: attr('string'),
  image: attr('string'),
  bedrooms: attr('number'),
  description: attr('string')
});
