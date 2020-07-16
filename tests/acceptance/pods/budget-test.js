import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | budget', hooks => {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/budget');
  });

  test('visiting /budget', async assert => {
    assert.equal(currentURL(), '/budget');
    assert.dom('[data-test-nav-bar]').exists();
    assert.dom('[data-test-page-header="budget"]').hasText('Budgets');
    assert.dom('[data-test-budget-search-label]').exists();
    assert.dom('[data-test-budget-search-value]').exists();
    assert.dom('[data-test-budget-table]').exists();
  });
});
