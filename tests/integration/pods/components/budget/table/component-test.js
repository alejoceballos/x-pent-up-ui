import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | budget/table', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        const budgets = [
            { name: 'My budget', description: 'My personal budget' }
        ];

        this.set('budgets', budgets);
        await render(hbs`
            <Budget::Table @budgets={{this.budgets}} />
        `);

        assert.dom('[data-test-budget-table]').exists();
        assert.dom('[data-test-grid-header]').exists();
        assert.dom('[data-test-grid-row]').exists();
    });
});
