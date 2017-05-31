import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  time: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  mood: DS.attr(),
  music: DS.attr()
});
