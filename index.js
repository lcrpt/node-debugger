const { groupBy } = require('lodash');
const fixtures = require('./fixtures');

const items = groupBy(fixtures, (item) => item.id.substring(0, 2));

console.log(JSON.stringify(items, null, 4));
