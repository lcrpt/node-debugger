const { groupBy } = require('lodash');
const packageReferences = require('./fixtures');

const items = groupBy(packageReferences, (ref) => ref.id);

console.log(items);
