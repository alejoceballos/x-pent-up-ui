import {module, test} from 'qunit';
import {click, visit, currentURL} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
    setupApplicationTest(hooks);

    hooks.beforeEach(async function() {
        await visit('/');
    });

    test('visiting /', async function (assert) {
        assert.equal(currentURL(), '/');
        assert.dom('[data-test-nav-bar]').exists();
        assert.dom('[data-test-page-header]').hasText('X Pent Up!');
    });

    test('Clicking Main Menu', async function (assert) {
        await click('[data-test-menu-main]');
        assert.equal(currentURL(), '/');
    });

    test('Clicking Budget Menu', async function (assert) {
        await click('[data-test-menu-budget]');
        assert.equal(currentURL(), '/budget');
    });

    test('Clicking About Menu', async function (assert) {
        await click('[data-test-menu-about]');
        assert.equal(currentURL(), '/about');
    });

    test('Clicking "budget" link', async function (assert) {
        await click('[data-test-link-to-budget]');
        assert.equal(currentURL(), '/budget');
    });

    test('Clicking "About" link', async function (assert) {
        await click('[data-test-link-to-about]');
        assert.equal(currentURL(), '/about');
    });
});
