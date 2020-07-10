import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Model | budget', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function() {
        this.store = this.owner.lookup('service:store');
    });

    test('it exists', function (assert) {
        const data = {
            name: 'My Budget',
            description: 'My budget description',
        };

        const model = this.store.createRecord('budget', data);

        assert.notOk(model.id);
        assert.equal(model.name, data.name);
        assert.equal(model.description, data.description);
    });
});
