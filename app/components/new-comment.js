import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow(){
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        date: this.get('date') ? this.get('date') : "",
        time: this.get('time') ? this.get('time') : "",
        blog: this.get('blog')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
