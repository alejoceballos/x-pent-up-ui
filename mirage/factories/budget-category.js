import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(idx) {
    return `Budget Category ${idx + 1}`;
  }

});
