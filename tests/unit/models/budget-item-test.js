import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { BudgetItemType } from 'x-pent-up-ui/models/budget-item';
import moment from 'moment';

module('Unit | Model | budget item', function(hooks) {

  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    this.today = moment();
  });

  test('it creates', function(assert) {
    const itemData = {
      name: 'name',
      type: BudgetItemType.EXPENSE,
      budgetedDate: moment(this.today).toDate(),
      budgetedValue: 1,
      actualDate: moment(this.today).add(1, 'days').toDate(),
      actualValue: 2
    };

    const model = this.store.createRecord('budget-item', itemData);

    Object.entries(itemData).forEach(entry => {
      assert.equal(model[entry], itemData[entry]);
    })
  });

});
