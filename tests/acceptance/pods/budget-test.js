import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';
import {setupMirage} from "ember-cli-mirage/test-support";

module('Acceptance | budget', hooks => {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.create('budget');
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
