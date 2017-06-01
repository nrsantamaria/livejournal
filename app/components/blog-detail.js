import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if(confirm('Are you sure you want to delete this melodramatic blog?')) {
        this.sendAction('destroyBlog', blog);
      }
    },
    update(blog, params) {
      this.sendAction('update', blog, params);
    },
    saveComment(params) {
      this.sendAction('saveComment', params)
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
