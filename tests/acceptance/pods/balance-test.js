import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | balance', hooks => {
    setupApplicationTest(hooks);

    test('visiting /balance', async assert => {
        await visit('/balance');

        assert.equal(currentURL(), '/balance');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header]').hasText('Financial Balances');
        assert.dom('[data-test-balance-table]').exists();
    });
});
