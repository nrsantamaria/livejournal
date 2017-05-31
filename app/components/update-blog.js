import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        date: this.get('date'),
        time: this.get('time'),
        title: this.get('title'),
        body: this.get('body'),
        mood: this.get('mood'),
        music: this.get('music')
      };
      this.set('updateNewBlog', false);
      this.sendAction('update', blog, params);
    }
  }
});
