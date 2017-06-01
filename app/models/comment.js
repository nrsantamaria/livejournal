import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  blog: DS.belongsTo('blog', { async: true })
});
