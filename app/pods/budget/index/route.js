import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class BudgetIndexRoute extends Route {
    @service budget;

    async model() {
        return this.budget.getAll();
    }
}
