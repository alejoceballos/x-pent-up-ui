import Route from '@ember/routing/route';

export default class BalanceRoute extends Route {
    async model() {
        let response = await fetch('/api/balance.json');
        let { data } = await response.json();
        return data.map(model => model.attributes);
    }
}
