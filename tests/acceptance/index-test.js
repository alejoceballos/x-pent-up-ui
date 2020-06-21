import {module, test} from 'qunit';
import {click, visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function (assert) {
        await visit('/');
        assert.equal(currentURL(), '/');
        assert.dom('h1').hasText('X Pent Up!');
    });

    test('Clicking "Balances"', async function (assert) {
        await visit('/');
        await click('[data-test="link-to-balance"]');
        assert.equal(currentURL(), '/balance');
    });

    test('Clicking "About"', async function (assert) {
        await visit('/');
        await click('[data-test="link-to-about"]');
        assert.equal(currentURL(), '/about');
    });

});
