// import Route from '@ember/routing/route';

// export default Route.extend({
// });
// ROUTE HANDLER. FILE GETS CALLED WHEN INDEX ROUTE '/' IS REQUESTED.
// Import
import Ember from 'ember';
// Destruct
const { Route } = Ember;
// Export
export default Route.extend({
    // Lifecycle Hook.
    beforeModel() {
        this.replaceWith('rentals');
    }
});