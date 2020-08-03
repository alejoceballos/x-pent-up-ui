import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';
import {BudgetUtils} from "../../utils/budget-utils";
import sumBy from "lodash/sumBy";

module('Unit | Model | budget', function (hooks) {
  setupTest(hooks);

  const {
    firstCategoryExpenses,
    firstCategoryIncomes,
    secondCategoryExpenses,
    secondCategoryIncomes,
    firstCategoryName,
    secondCategoryName
  } = BudgetUtils;

  const budgetData = {
    name: 'My Budget',
    description: 'My budget description'
  };

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');

    const firstCategoryItems = [
      ...firstCategoryExpenses.map(expense => this.store.createRecord('budget-item', expense)),
      ...firstCategoryIncomes.map(income => this.store.createRecord('budget-item', income))
    ];

    const secondCategoryItems = [
      ...secondCategoryExpenses.map(expense => this.store.createRecord('budget-item', expense)),
      ...secondCategoryIncomes.map(income => this.store.createRecord('budget-item', income))
    ];

    const firstCategory = { name: firstCategoryName, items: firstCategoryItems };
    const secondCategory = { name: secondCategoryName, items: secondCategoryItems };

    const categories = [
      this.store.createRecord('budget-category', firstCategory),
      this.store.createRecord('budget-category', secondCategory)
    ];

    const budget = { ...budgetData, categories };

    this.model = this.store.createRecord('budget', budget);
  });

  test('it exists in the store', function (assert) {
    assert.notOk(this.model.id);
    assert.equal(this.model.name, budgetData.name);
    assert.equal(this.model.description, budgetData.description);
  });

  test('it sums budgeted income values', function(assert) {
    const budgetCategoryIncomes = [...firstCategoryIncomes, ...secondCategoryIncomes];
    const expectedBudgetedIncome = sumBy(budgetCategoryIncomes, 'budgetedValue');
    assert.equal(this.model.budgetedIncome, expectedBudgetedIncome);
  });

  test('it sums actual income values', function(assert) {
    const actualCategoryIncomes = [...firstCategoryIncomes, ...secondCategoryIncomes];
    const expectedActualIncome = sumBy(actualCategoryIncomes, 'actualValue');
    assert.equal(this.model.actualIncome, expectedActualIncome);
  });

  test('it sums budgeted expense values', function(assert) {
    const budgetCategoryExpenses = [...firstCategoryExpenses, ...secondCategoryExpenses];
    const expectedBudgetedExpenses = sumBy(budgetCategoryExpenses, 'budgetedValue');
    assert.equal(this.model.budgetedExpense, expectedBudgetedExpenses);
  });

  test('it sums actual expense values', function(assert) {
    const budgetCategoryExpenses = [...firstCategoryExpenses, ...secondCategoryExpenses];
    const expectedActualExpenses = sumBy(budgetCategoryExpenses, 'actualValue');
    assert.equal(this.model.actualExpense, expectedActualExpenses);
  });

  test('it calculates budgeted revenue', function(assert) {
    const budgetCategoryIncomes = [...firstCategoryIncomes, ...secondCategoryIncomes];
    const expectedBudgetedIncome = sumBy(budgetCategoryIncomes, 'budgetedValue');

    const budgetCategoryExpenses = [...firstCategoryExpenses, ...secondCategoryExpenses];
    const expectedBudgetedExpenses = sumBy(budgetCategoryExpenses, 'budgetedValue');

    const expectedBudgetedRevenue = expectedBudgetedIncome - expectedBudgetedExpenses;
    assert.equal(this.model.budgetedRevenue, expectedBudgetedRevenue);
  });

  test('it calculates actual revenue', function(assert) {
    const actualCategoryIncomes = [...firstCategoryIncomes, ...secondCategoryIncomes];
    const expectedActualIncome = sumBy(actualCategoryIncomes, 'actualValue');

    const budgetCategoryExpenses = [...firstCategoryExpenses, ...secondCategoryExpenses];
    const expectedActualExpenses = sumBy(budgetCategoryExpenses, 'actualValue');

    const expectedActualRevenue = expectedActualIncome - expectedActualExpenses;
    assert.equal(this.model.actualRevenue, expectedActualRevenue);
  });

});
