import {module, test} from 'qunit';
import {click, visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function (assert) {
        await visit('/');
        assert.equal(currentURL(), '/');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header]').hasText('X Pent Up!');
    });

    test('Clicking Main Menu', async function (assert) {
        await visit('/');
        await click('[data-test-menu-main]');
        assert.equal(currentURL(), '/');
    });

    test('Clicking Budget Menu', async function (assert) {
        await visit('/');
        await click('[data-test-menu-budget]');
        assert.equal(currentURL(), '/budgets');
    });

    test('Clicking About Menu', async function (assert) {
        await visit('/');
        await click('[data-test-menu-about]');
        assert.equal(currentURL(), '/about');
    });

    test('Clicking "Budgets"', async function (assert) {
        await visit('/');
        await click('[data-test-link-to-budget]');
        assert.equal(currentURL(), '/budgets');
    });

    test('Clicking "About"', async function (assert) {
        await visit('/');
        await click('[data-test-link-to-about]');
        assert.equal(currentURL(), '/about');
    });
});
