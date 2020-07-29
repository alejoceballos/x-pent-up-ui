import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | budget/index', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function () {
        this.route = this.owner.lookup('route:budget/index');
    });

    test('it exists', function (assert) {
        assert.ok(this.route);
    });
});
