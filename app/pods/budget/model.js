import Model, {attr} from '@ember-data/model';

export default class BudgetModel extends Model {

    @attr name;
    @attr description

}
