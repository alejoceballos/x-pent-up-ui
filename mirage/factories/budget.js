import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({

  name(idx) {
    return `My Budget ${idx + 1}`;
  },

  description(idx) {
    return `My long personal budget description number ${idx + 1}`;
  },

});
