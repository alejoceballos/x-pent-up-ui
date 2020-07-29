export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  for (let i = 0; i < 10; i++) {
    const items = server.createList('budget-item', 10);

    const categories = [];
    for (let cIdx = 0; cIdx < 3; cIdx++) {
      categories.push(server.create('budget-category', { items }));
    }
    server.create('budget', { categories });
  }
}
