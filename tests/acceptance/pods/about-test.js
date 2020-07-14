import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | about', function (hooks) {
    setupApplicationTest(hooks);

    hooks.beforeEach(async function() {
        await visit('/about');
    });

    test('visiting /about', async function (assert) {
        assert.equal(currentURL(), '/about');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header="about"]').hasText('About');
    });
});
