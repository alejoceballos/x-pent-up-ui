import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | budgets/budget', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /budgets/budget', async function (assert) {
        await visit('/budgets/1');

        assert.equal(currentURL(), '/budgets/1');
        assert.dom('[data-test-budget-id]').hasText('1');
    });
});
