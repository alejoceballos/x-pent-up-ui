import {module, test} from 'qunit';
import {click, visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function (assert) {
        await visit('/');
        assert.equal(currentURL(), '/');
        assert.dom('[data-test="nav-bar"]').exists();
        assert.dom('[data-test="page-header"]').hasText('X Pent Up!');
    });

    test('Clicking Main Menu', async function (assert) {
        await visit('/');
        await click('[data-test="menu-main"]');
        assert.equal(currentURL(), '/');
    });

    test('Clicking Balance Menu', async function (assert) {
        await visit('/');
        await click('[data-test="menu-balance"]');
        assert.equal(currentURL(), '/balance');
    });

    test('Clicking About Menu', async function (assert) {
        await visit('/');
        await click('[data-test="menu-about"]');
        assert.equal(currentURL(), '/about');
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
