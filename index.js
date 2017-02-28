const { groupBy } = require('lodash');
const fixtues = require('./fixtures');

const items = groupBy(fixtues, (item) => item.id.substring(0, 2));

console.log(JSON.stringify(items, null, 4));
