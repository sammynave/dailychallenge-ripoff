import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //here, if you were using ember-data, you'd just do store.find('ultimatum')
    //and it would automatically hit your server.
    return Ember.RSVP.hash({
      ultimata: this.store.find('ultimatum')
    });
  },
  setupController(controller, models){
    return controller.setProperties(models);
  }
});
