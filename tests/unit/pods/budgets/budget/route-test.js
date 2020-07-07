import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | budgets/budget', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function () {
        this.route = this.owner.lookup('route:budgets/budget');
    });

    test('it exists', function (assert) {
        assert.ok(this.route);
    });

    // test('it returns a model', async function (assert) {
    //     const model = await this.route.model(1);
    //     assert.ok(model);
    // });
});
