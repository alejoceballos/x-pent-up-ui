import Model, { attr } from '@ember-data/model';

export const BudgetItemType = {
  INCOME: 1,
  EXPENSE: -1
};

export default class BudgetItemModel extends Model {

  @attr('string') name;
  @attr('number') type;
  @attr ('date') budgetedDate;
  @attr ('number') budgetedValue;
  @attr ('date') actualDate;
  @attr ('number') actualValue;

}
