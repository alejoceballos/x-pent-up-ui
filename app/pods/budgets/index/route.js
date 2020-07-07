import Route from '@ember/routing/route';

export default class BudgetsIndexRoute extends Route {
    async model() {
        const response = await fetch('/api/budgets.json');
        const { data } = await response.json();
        return data.map(model => {
            const { id, attributes } = model;
            return { ...attributes, id };
        });
    }
}
