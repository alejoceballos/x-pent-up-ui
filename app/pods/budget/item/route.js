import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class BudgetItemRoute extends Route {
    @service budget;

    async model(params) {
        return await this.budget.get(params.budget_id);
    }
}
