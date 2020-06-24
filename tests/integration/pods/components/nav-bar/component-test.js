import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<NavBar />`);

        await render(hbs`
            <NavBar>
                template block text
            </NavBar>
        `);

        assert.dom('[data-test="nav-bar"]').exists();
        assert.dom('[data-test="menu-main"]').exists();
        assert.dom('[data-test="menu-balance"]').exists();
        assert.dom('[data-test="menu-about"]').exists();
    });
});
