import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Service | budgets', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function () {
        this.service = this.owner.lookup('service:budgets');
    });

    test('it returns all budgets', async function (assert) {
        const actual = await this.service.getAll();
        assert.equal(actual.length, 8);
    });

    test('it returns only one budget', async function (assert) {
        const actual = await this.service.get(1);
        assert.ok(actual);
    });
});
