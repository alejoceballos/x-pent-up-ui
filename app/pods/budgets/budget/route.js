import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class BudgetsBudgetRoute extends Route {
    @service budgets;

    async model(params) {
        return await this.budgets.get(params.budget_id);
    }
}
