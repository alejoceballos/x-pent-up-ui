import Route from '@ember/routing/route';

export default class BudgetsBudgetRoute extends Route {
    model(params) {
        return { id: params.budget_id };
    }
}
