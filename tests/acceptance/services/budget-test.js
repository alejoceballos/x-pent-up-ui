import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {setupMirage} from "ember-cli-mirage/test-support";

module('Acceptance | Service | budget', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.createList('budget', 8);
    this.service = this.owner.lookup('service:budget');
  });

  test('it returns all budget', async function (assert) {
    const actual = await this.service.getAll();
    assert.equal(actual.length, 8);
  });

  test('it returns only one budget', async function (assert) {
    const actual = await this.service.get(1);
    assert.ok(actual);
  });
});
