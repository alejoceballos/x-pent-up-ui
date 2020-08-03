import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sumBy from 'lodash/sumBy';
import { BudgetUtils } from '../../utils/budget-utils';

module('Unit | Model | budget category', function(hooks) {
  setupTest(hooks);

  const { firstCategoryExpenses, firstCategoryIncomes, firstCategoryName, firstCategoryItemsSize } = BudgetUtils;

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');

    const items = [
      ...firstCategoryExpenses.map(expense => this.store.createRecord('budget-item', expense)),
      ...firstCategoryIncomes.map(income => this.store.createRecord('budget-item', income))
    ];

    const category = { name: firstCategoryName, items };

    this.model = this.store.createRecord('budget-category', category);
  });

  test('it exists in the store', function(assert) {
    assert.equal(this.model.name, firstCategoryName);
    assert.equal(this.model.items.length, firstCategoryItemsSize);
  });

  test('it sums budgeted income values', function(assert) {
    const expectedBudgetedIncome = sumBy(firstCategoryIncomes, 'budgetedValue');
    assert.equal(this.model.totalBudgetedIncome, expectedBudgetedIncome);
  });

  test('it sums actual income values', function(assert) {
    const expectedActualIncome = sumBy(firstCategoryIncomes, 'actualValue');
    assert.equal(this.model.totalActualIncome, expectedActualIncome);
  });

  test('it sums budgeted expense values', function(assert) {
    const expectedBudgetedExpense = sumBy(firstCategoryExpenses, 'budgetedValue');
    assert.equal(this.model.totalBudgetedExpense, expectedBudgetedExpense);
  });

  test('it sums actual expense values', function(assert) {
    const expectedActualExpense = sumBy(firstCategoryExpenses, 'actualValue');
    assert.equal(this.model.totalActualExpense, expectedActualExpense);
  });

  test('it calculates budgeted revenue', function(assert) {
    const expectedBudgetedRevenue = sumBy(firstCategoryIncomes, 'budgetedValue') - sumBy(firstCategoryExpenses, 'budgetedValue');
    assert.equal(this.model.budgetedRevenue, expectedBudgetedRevenue);
  });

  test('it calculates actual revenue', function(assert) {
    const expectedActualRevenue = sumBy(firstCategoryIncomes, 'actualValue') - sumBy(firstCategoryExpenses, 'actualValue');
    assert.equal(this.model.actualRevenue, expectedActualRevenue);
  });

});
