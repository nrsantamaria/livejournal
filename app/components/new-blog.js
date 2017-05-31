import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    saveBlog1() {
      var params = {
        date: this.get('date') ? this.get('date'): "",
        time: this.get('time') ? this.get('time'): "",
        title: this.get('title') ? this.get('title'): "",
        body: this.get('body') ? this.get('body'): "",
        mood: this.get('mood') ? this.get('mood'): "",
        music: this.get('music') ? this.get('music'): ""
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params)
    }
  }
});
