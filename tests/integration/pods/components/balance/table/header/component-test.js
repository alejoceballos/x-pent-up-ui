import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | balance/table/header', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<Balance::Table::Header />`);
        assert.dom('[data-test-grid-header]').exists();
    });
});
