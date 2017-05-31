import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    update(blog, params) {
      this.sendAction('update', blog, params);
    },
    delete(blog) {
      if(confirm('Are you sure you want to delete this melodramatic blog?')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
