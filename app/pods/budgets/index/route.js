import Route from '@ember/routing/route';

export default class BudgetsIndexRoute extends Route {
    async model() {
        let response = await fetch('/api/budgets.json');
        let { data } = await response.json();
        return data.map(model => {
            return { ...model.attributes, id: model.id };
        });
    }
}
