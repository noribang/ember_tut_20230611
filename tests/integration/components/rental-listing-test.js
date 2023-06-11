import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | rental listing', function() {
  setupComponentTest('rental-listing', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#rental-listing}}
    //     template content
    //   {{/rental-listing}}
    // `);

    this.render(hbs`{{rental-listing}}`);
    expect(this.$()).to.have.length(1);
  });
});
