import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | balance', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        let route = this.owner.lookup('route:balance');
        assert.ok(route);
    });
});
