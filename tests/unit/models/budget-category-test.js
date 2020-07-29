import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { BudgetItemType } from 'x-pent-up-ui/models/budget-item';
import sumBy from 'lodash/sumBy';
import moment from 'moment';

module('Unit | Model | budget category', function(hooks) {
  setupTest(hooks);

  const categoryName = 'name';

  const baseItem = {
    name: categoryName,
    budgetedDate: moment(this.today).toDate(),
    actualDate: moment(this.today).add(1, 'days').toDate(),
  };

  const expenseItem = { ...baseItem, type: BudgetItemType.EXPENSE };
  const expenses = [
    { ...expenseItem, budgetedValue: 1, actualValue: 2 },
    { ...expenseItem, budgetedValue: 2, actualValue: 3 }
  ];

  const incomeItem = { ...baseItem, type: BudgetItemType.INCOME };
  const incomes = [
    { ...incomeItem, budgetedValue: 4, actualValue: 5 },
    { ...incomeItem, budgetedValue: 6, actualValue: 7 }
  ];

  const budgetItemsSize = expenses.length + incomes.length;

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');

    const items = [
      ...expenses.map(expense => this.store.createRecord('budget-item', expense)),
      ...incomes.map(income => this.store.createRecord('budget-item', income))
    ];

    const category = { name: categoryName, items };

    this.model = this.store.createRecord('budget-category', category);
  });

  test('it creates', function(assert) {
    assert.equal(this.model.name, categoryName);
    assert.equal(this.model.items.length, budgetItemsSize);
  });

  test('it sums budgeted income values', function(assert) {
    const expectedBudgetedIncome = sumBy(incomes, 'budgetedValue');
    assert.equal(this.model.totalBudgetedIncome, expectedBudgetedIncome);
  });

  test('it sums actual income values', function(assert) {
    const expectedActualIncome = sumBy(incomes, 'actualValue');
    assert.equal(this.model.totalActualIncome, expectedActualIncome);
  });

  test('it sums budgeted expense values', function(assert) {
    const expectedBudgetedExpense = sumBy(expenses, 'budgetedValue');
    assert.equal(this.model.totalBudgetedExpense, expectedBudgetedExpense);
  });

  test('it sums actual expense values', function(assert) {
    const expectedActualExpense = sumBy(expenses, 'actualValue');
    assert.equal(this.model.totalActualExpense, expectedActualExpense);
  });

  test('it calculates budgeted revenue', function(assert) {
    const expectedBudgetedRevenue = sumBy(incomes, 'budgetedValue') - sumBy(expenses, 'budgetedValue');
    assert.equal(this.model.budgetedRevenue, expectedBudgetedRevenue);
  });

  test('it calculates actual revenue', function(assert) {
    const expectedActualRevenue = sumBy(incomes, 'actualValue') - sumBy(expenses, 'actualValue');
    assert.equal(this.model.actualRevenue, expectedActualRevenue);
  });

});
