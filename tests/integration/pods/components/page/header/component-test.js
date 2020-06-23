import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | page/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Page::Header>
        My Page Header
      </Page::Header>
    `);

    assert.dom('[data-test="page-header"]').hasText('My Page Header');
  });
});
