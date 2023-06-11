// import Component from '@ember/component';

// export default Component.extend({
// });

// Import
import Ember from 'ember';
// Destruct
const { Component } = Ember;
// Export
export default Component.extend({
    isWide: false,
    actions: {
        toggleImageSize() {
            this.toggleProperty('isWide');
        }
    }
});