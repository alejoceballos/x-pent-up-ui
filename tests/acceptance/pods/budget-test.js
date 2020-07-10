import {module, test} from 'qunit';
import {visit, click, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | budget', hooks => {
    setupApplicationTest(hooks);

    hooks.beforeEach(async function() {
        await visit('/budget');
    });

    test('visiting /budget', async assert => {
        assert.equal(currentURL(), '/budget');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header]').hasText('Budgets');
        assert.dom('[data-test-budget-table]').exists();
    });

    test('click to go to budget page', async assert => {
        await click('[data-test-table-col-link-to-edit]');
        assert.equal(currentURL(), '/budget/1');
    });
});
