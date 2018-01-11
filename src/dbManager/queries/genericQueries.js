const { selectAll } = require('./crud');
const { filterById } = require('../../helpers/filters');

/**
 * Returns the subtype.
 * @param {array} subtypes             Array containing names of the database entities of subtypes.
 * @param {string} idProperty          Name of the id property used in the database. ex: accountId.
 * @param {int} id                     search parameter.
 * @return if present, return name if subtype. Else returns false
 */
const getSubtypeOf = (subtypes, idProperty, id) => Promise.all(subtypes.map(subType => selectAll(subType)))
  .then(rSubtypes => rSubtypes.map(rSubtype => filterById(rSubtype, idProperty, id)))
  .then(rSubtypes => rSubtypes.some(foo => foo.length !== 0) ? rSubtypes.findIndex(foo => foo.length !== 0) : false);

module.exports = { getSubtypeOf };
