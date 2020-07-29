import { Factory } from 'ember-cli-mirage';
import { random } from 'faker';
import moment from 'moment';

const today = moment();

export default Factory.extend({

  name(idx) {
    return `Budget Item ${idx}`;
  },

  type() {
    return random.arrayElement([-1, 1]);
  },

  budgetedDate(idx) {
    return moment(today).add(idx, 'days').toDate();
  },

  budgetedValue() {
    random.number({
      min: 40,
      max: 50
    });
  },

  actualDate(idx) {
    return moment(today).add(idx, 'days').toDate();
  },

  actualValue() {
    random.number({
      min: 30,
      max: 60
    });
  }

});
