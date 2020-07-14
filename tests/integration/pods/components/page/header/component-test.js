import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | page | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Page::Header data-test-page-header="test">
        My Page Header
      </Page::Header>
    `);

    assert.dom('[data-test-page-header="test"]').hasText('My Page Header');
  });
});
