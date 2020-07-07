import Route from '@ember/routing/route';

export default class BudgetsBudgetRoute extends Route {
    async model(params) {
        const response = await fetch('/api/budgets.json');
        const { data } = await response.json();
        const obj = data.find(model => model.id == params.budget_id);
        return { ...obj.attributes, id: obj.id };
    }
}
