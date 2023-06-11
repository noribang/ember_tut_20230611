/* THIS THE DEFAULT THAT THROWS AN ERROR.*/
// import Application from '@ember/application';

/* USE: import Ember from 'ember';.*/
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

const { Application } = Ember;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

/* THIS DEFAULT THROWS AN ERROR.*/
// const App = Application.extend({
//   modulePrefix: config.modulePrefix,
//   podModulePrefix: config.podModulePrefix,
//   Resolver
// });

loadInitializers(App, config.modulePrefix);

export default App;
