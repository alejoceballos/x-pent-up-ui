import Service, {inject as service} from '@ember/service';

export default class BudgetService extends Service {
    @service store;

    async getAll() {
        return this.store.findAll('budget', { reload: true, include: 'categories' });
    }

    async get(id) {
        return this.store.find('budget', id);
    }
}
