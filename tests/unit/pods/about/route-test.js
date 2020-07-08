import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | about', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function() {
        this.route = this.owner.lookup('route:about');
    });

    test('it exists', function (assert) {
        assert.ok(this.route);
    });
});
