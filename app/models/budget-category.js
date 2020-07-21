import Model, { attr, hasMany } from '@ember-data/model';

export default class BudgetCategoryModel extends Model {

  @attr('string') name;
  @hasMany('budget-item') budgetItems;

}
