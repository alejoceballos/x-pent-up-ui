import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | budgets/budget', function (hooks) {
    setupApplicationTest(hooks);

    const budget = {id: 1, name: 'My Budget', description: 'My personal budget description 1'};

    hooks.beforeEach(async function() {
        await visit(`/budgets/${budget.id}`);
    });

    test('visiting /budgets/budget', async function (assert) {
        assert.equal(currentURL(), `/budgets/${budget.id}`);
        assert.dom('[data-test-budget-id]').hasText(budget.id.toString());
        assert.dom('[data-test-budget-name]').hasText(budget.name);
        assert.dom('[data-test-budget-description]').hasText(budget.description);
    });
});
