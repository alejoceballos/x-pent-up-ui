import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BudgetsRoute extends Route {
    loading(transition, route) {
        console.log('=> BudgetsRoute::loading')
        super.loading(transition, route);
    }

    activate() {
        console.log('=> BudgetsRoute::activate')
        super.activate();
    }

    afterModel(resolvedModel, transition) {
        console.log('=> BudgetsRoute::afterModel')
        return super.afterModel(resolvedModel, transition);
    }

    beforeModel(transition) {
        console.log('=> BudgetsRoute::beforeModel')
        return super.beforeModel(transition);
    }

    deactivate() {
        console.log('=> BudgetsRoute::deactivate')
        super.deactivate();
    }

    destroy() {
        console.log('=> BudgetsRoute::destroy')
        return super.destroy();
    }

    init() {
        console.log('=> BudgetsRoute::init')
        super.init();
    }

    model(params, transition) {
        console.log('=> BudgetsRoute::model')
        return super.model(params, transition);
    }

    willDestroy() {
        console.log('=> BudgetsRoute::willDestroy')
        super.willDestroy();
    }

    willTransition(transition) {
        console.log('=> BudgetsRoute::willTransition')
        super.willTransition(transition);
    }

    didTransition() {
        console.log('=> BudgetsRoute::didTransition')
        super.didTransition();
    }
}
