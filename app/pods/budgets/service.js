import Service from '@ember/service';

export default class BudgetsService extends Service {

    async getAll() {
        const response = await fetch('/api/budgets.json');
        const { data } = await response.json();
        return data.map(model => {
            const { id, attributes } = model;
            return { ...attributes, id };
        });
    }

    async get(id) {
        const budgets = await this.getAll();
        return budgets.find(budget => budget.id == id);
    }
}
