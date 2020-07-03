import Route from '@ember/routing/route';

export default class BalanceRoute extends Route {
    async model() {
        return [
            { name: 'My budget', description: 'My personal budget' },
            { name: 'Birthday budget', description: 'Incomes and expenses of a birthday party that I will never make' },
            { name: 'Mom\'s budget', description: 'It seems that it scares her a lot' },
            { name: 'Someone else\' budget', description: 'I\'m gonna become an accountant' },
            { name: 'Fulano da Silva budget', description: 'Third person\'s budget' },
            { name: 'Beltrano da Silva budget', description: 'He must be the other one\'s brother' },
            { name: 'Cicrano da Silva budget', description: 'That is a large family' },
            { name: 'Very big name that should not be allowed in the budget name', description: 'Even bigger description inserted just to test the layout of my not that elegant table, but whatever' },
        ]
    }
}
