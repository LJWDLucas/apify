/**
 * Turn an object into a mySQL insert statement.
 * @param {Object} pairs         key:value pair of the required table properties.
 */

const valuesString = pairs => Object.values(pairs)
  .reduce((prev, curr) => typeof curr === typeof true ? prev.concat(`,${curr}`) : prev.concat(`,"${curr}"`), '')
  .replace(',', '(')
  .concat(')');

const keysString = pairs => Object.keys(pairs)
  .reduce((prev, curr) => prev.concat(`,${curr}`), '')
  .replace(',', '(')
  .concat(')');

const insertQuery = pairs => `${keysString(pairs)} VALUES ${valuesString(pairs)};`;


module.exports = {
  insertQuery,
  valuesString,
  keysString
};
