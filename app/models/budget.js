import Model, { attr, hasMany } from '@ember-data/model';

export default class BudgetModel extends Model {

    @attr('string') name;
    @attr('string') description;
    @hasMany('budget-category') categories;

}
