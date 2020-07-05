import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('budgets', function() {
        this.route('budget', { path: '/:budget_id' });
    });
    this.route('about');
});
