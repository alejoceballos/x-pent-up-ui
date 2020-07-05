import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, click} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | budget/table/row', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders with budgets', async function (assert) {
        const budget = { name: 'My budget', description: 'My personal budget' };
        this.set('budget', budget);
        await render(hbs`<Budget::Table::Row @budget={{this.budget}}/>`);

        assert.dom('[data-test-grid-row]').exists();
        assert.dom('[data-test-show-summary]').exists();
        assert.dom('[data-test-row-summary]').doesNotExist();
        assert.dom('[data-test-table-col-name]').hasText(budget.name);
        assert.dom('[data-test-table-col-description]').hasText(budget.description);
        assert.dom('[data-test-table-col-link-to-edit]').hasText('[Edit]');
        assert.dom('[data-test-table-col-link-to-delete]').hasText('[Delete]');
    });

    test('Clicking on summary button shows/hides summary', async function (assert) {
        await render(hbs`<Budget::Table::Row />`);
        assert.dom('[data-test-row-summary]').doesNotExist();
        await click('[data-test-show-summary]');
        assert.dom('[data-test-row-summary]').exists();
        await click('[data-test-show-summary]');
        assert.dom('[data-test-row-summary]').doesNotExist();
    });

});