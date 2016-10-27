import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      reviews: this.store.findAll('review'),
      entries: this.store.findAll('entry')
    });
  },

  actions: {
    saveEntry3(params) {
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
    },
    destroyEntry(entry) {
      entry.destroyRecord();
    }
  }
});
