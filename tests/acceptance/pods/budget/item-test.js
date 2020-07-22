import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';
import {setupMirage} from "ember-cli-mirage/test-support";

module('Acceptance | budget | item', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  const budget = {
    id: 1,
    name: 'My Budget 1',
    description: 'My long personal budget description number 1'};

  hooks.beforeEach(async function () {
    this.server.create('budget');
    await visit(`/budget/${budget.id}`);
  });

  test('visiting /budget/item', async function (assert) {
    assert.equal(currentURL(), `/budget/${budget.id}`);
    assert.dom('[data-test-budget-id]').hasText(budget.id.toString());
    assert.dom('[data-test-budget-name]').hasText(budget.name);
    assert.dom('[data-test-budget-description]').hasText(budget.description);
  });
});
