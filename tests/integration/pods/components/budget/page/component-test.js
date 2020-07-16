import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | budget | page', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    await render(hbs`<Budget::Page />`);
  });

  test('it renders', async function(assert) {
    assert.dom('[data-test-budget-search-label]').exists();
    assert.dom('[data-test-budget-search-value]').exists();
    assert.dom('[data-test-budget-table]').exists();
  });
});
