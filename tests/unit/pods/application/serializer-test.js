import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function () {
        this.store = this.owner.lookup('service:store');
    });

    test('it exists', function (assert) {
        const serializer = this.store.serializerFor('application');
        assert.ok(serializer);
    });

    test('it serializes records', function (assert) {
        const record = this.store.createRecord('budget', {});
        const serializedRecord = record.serialize();
        assert.ok(serializedRecord);
    });
});
