import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | budget/table', function (hooks) {
    setupRenderingTest(hooks);

    const budgets = [
        {id: 1, name: 'My budget 1', description: 'My personal budget 1'},
        {id: 2, name: 'My budget 2', description: 'My personal budget 2'},
        {id: 3, name: 'My budget 3', description: 'My personal budget 3'},
    ];

    hooks.beforeEach(function () {
        this.set('budgets', budgets);
    });

    test('it renders', async function (assert) {
        await render(hbs`
            <Budget::Table @budgets={{this.budgets}} />
        `);

        assert.dom('[data-test-budget-table]').exists();
        assert.dom('[data-test-grid-header]').exists();
        assert.dom('[data-test-grid-row]').exists({count: 3});
    });
});
