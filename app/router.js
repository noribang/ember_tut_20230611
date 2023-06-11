import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

let AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// * Created by ember generate route scientists *
// AppRouter.map(function() {
//   this.route('scientists');
// });
// ROUTES FOR ALL PAGES ADDED INSIDE CALLBACK FUNCTION.
AppRouter.map(function() {
  // RUNS app/routes/about.js
  this.route('about');
  // RUNS app/routes/contact.js
  this.route('contact');
  // RUNS app/routes/rentals.js
  this.route('rentals');
});

export default AppRouter;
