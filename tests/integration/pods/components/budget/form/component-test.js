import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | budget/form', function (hooks) {
    setupRenderingTest(hooks);

    const budget = {id: 1, name: 'My budget', description: 'My personal budget'};

    hooks.beforeEach(function() {
        this.set('budget', budget);
    });

    test('it renders', async function (assert) {
        await render(hbs`<Budget::Form @budget={{this.budget}} />`);

        assert.dom('[data-test-budget-id]').hasText(budget.id.toString());
        assert.dom('[data-test-budget-name]').hasText(budget.name);
        assert.dom('[data-test-budget-description]').hasText(budget.description);
    });
});
