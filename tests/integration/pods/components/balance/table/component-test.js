import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | balance/table', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`
            <Balance::Table />
        `);

        assert.dom('[data-test="balance-table"]').exists();
        assert.dom('[data-test="grid-header"]').exists();
    });
});
