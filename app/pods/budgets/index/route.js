import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class BudgetsIndexRoute extends Route {
    @service budgets;

    async model() {
        return this.budgets.getAll();
    }
}
