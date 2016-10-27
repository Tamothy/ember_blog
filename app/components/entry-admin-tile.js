import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(entry) {
      if(confirm('Are yous absolutely positives yous wants to delete this??')) {
        this.sendAction('destroyEntry', entry);
      }
    }
  }
});
