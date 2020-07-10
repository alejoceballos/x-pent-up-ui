import Service, {inject as service} from '@ember/service';

export default class BudgetService extends Service {
    @service store;

    async getAll() {
        return this.store.findAll('budget');
        // const response = await fetch('/api/budgets.json');
        // const { data } = await response.json();
        // return data.map(model => {
        //     const { id, attributes } = model;
        //     return { ...attributes, id };
        // });
    }

    async get(id) {
        return this.store.find('budget', id);
        // const budgets = await this.getAll();
        // return budgets.find(budget => budget.id == id);
    }
}
