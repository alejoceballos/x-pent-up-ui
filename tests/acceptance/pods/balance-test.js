import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | balance', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /balance', async function(assert) {
    await visit('/balance');

    assert.equal(currentURL(), '/balance');
    assert.dom('h1').hasText('Financial Balances')
  });
});
