import {module, test} from 'qunit';
import {visit, click, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | budgets', hooks => {
    setupApplicationTest(hooks);

    hooks.beforeEach(async function() {
        await visit('/budgets');
    });

    test('visiting /budgets', async assert => {
        assert.equal(currentURL(), '/budgets');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header]').hasText('Budgets');
        assert.dom('[data-test-budget-table]').exists();
    });

    test('click to go to budget page', async assert => {
        await click('[data-test-table-col-link-to-edit]');
        assert.equal(currentURL(), '/budgets/1');
    });
});
