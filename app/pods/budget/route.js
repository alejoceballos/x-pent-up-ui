import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BudgetRoute extends Route {
    loading(transition, route) {
        console.log('=> BudgetRoute::loading')
        super.loading(transition, route);
    }

    activate() {
        console.log('=> BudgetRoute::activate')
        super.activate();
    }

    afterModel(resolvedModel, transition) {
        console.log('=> BudgetRoute::afterModel')
        return super.afterModel(resolvedModel, transition);
    }

    beforeModel(transition) {
        console.log('=> BudgetRoute::beforeModel')
        return super.beforeModel(transition);
    }

    deactivate() {
        console.log('=> BudgetRoute::deactivate')
        super.deactivate();
    }

    destroy() {
        console.log('=> BudgetRoute::destroy')
        return super.destroy();
    }

    init() {
        console.log('=> BudgetRoute::init')
        super.init();
    }

    model(params, transition) {
        console.log('=> BudgetRoute::model')
        return super.model(params, transition);
    }

    willDestroy() {
        console.log('=> BudgetRoute::willDestroy')
        super.willDestroy();
    }

    willTransition(transition) {
        console.log('=> BudgetRoute::willTransition')
        super.willTransition(transition);
    }

    didTransition() {
        console.log('=> BudgetRoute::didTransition')
        super.didTransition();
    }
}
