import Model, {attr, hasMany} from '@ember-data/model';
import { computed } from '@ember/object';
import { mapBy, sum } from '@ember/object/computed';

export default class BudgetModel extends Model {

  @attr('string') name;
  @attr('string') description;
  @hasMany('budget-category') categories;

  @mapBy('categories', 'totalBudgetedIncome') budgetedIncomeArray;
  @sum('budgetedIncomeArray') budgetedIncome;

  @mapBy('categories', 'totalActualIncome') actualIncomeArray;
  @sum('actualIncomeArray') actualIncome;

  @mapBy('categories', 'totalBudgetedExpense') budgetedExpenseArray;
  @sum('budgetedExpenseArray') budgetedExpense;

  @mapBy('categories', 'totalActualExpense') actualExpenseArray;
  @sum('actualExpenseArray') actualExpense;

  @computed('budgetedExpense', 'budgetedIncome')
  get budgetedRevenue() {
    return this.budgetedIncome - this.budgetedExpense;
  }

  @computed('actualExpense', 'actualIncome')
  get actualRevenue() {
    return this.actualIncome - this.actualExpense;
  }

}
