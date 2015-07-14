import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('ultimatum', params.ultimatum_id);
  },
  setupController(controller, model){
    return controller.set('ultimatum', model);
  }
});
