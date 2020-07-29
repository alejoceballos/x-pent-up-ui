import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
import { filterBy, mapBy, sum } from '@ember/object/computed';
import { BudgetItemType } from "./budget-item";

export default class BudgetCategoryModel extends Model {

  @attr('string') name;
  @hasMany('budget-item') items;

  @filterBy('items', 'type', BudgetItemType.INCOME) incomeArray;
  @filterBy('items', 'type', BudgetItemType.EXPENSE) expenseArray;

  @mapBy('incomeArray', 'budgetedValue') budgetedIncomeArray;
  @sum('budgetedIncomeArray') totalBudgetedIncome;

  @mapBy('incomeArray', 'actualValue') actualIncomeArray;
  @sum('actualIncomeArray') totalActualIncome;

  @mapBy('expenseArray', 'budgetedValue') budgetedExpenseArray;
  @sum('budgetedExpenseArray') totalBudgetedExpense;

  @mapBy('expenseArray', 'actualValue') actualExpenseArray;
  @sum('actualExpenseArray') totalActualExpense;

  @computed('totalBudgetedExpense', 'totalBudgetedIncome')
  get budgetedRevenue() {
    return this.totalBudgetedIncome - this.totalBudgetedExpense;
  }

  @computed('totalActualExpense', 'totalActualIncome')
  get actualRevenue() {
    return this.totalActualIncome - this.totalActualExpense;
  }

}
