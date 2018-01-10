/**
 * Turn an object into a mySQL insert statement.
 * @param {Object} pairs         key:value pair of the required table properties.
 */

const insertQuery = (pairs) => {
  const keys = Object.keys(pairs)
    .reduce((prev, curr) => prev.concat(`,${curr}`), '')
    .replace(',', '(')
    .concat(')');
  const values = Object.values(pairs)
    .reduce((prev, curr) => typeof curr === typeof true ? prev.concat(`,${curr}`) : prev.concat(`,"${curr}"`), '')
    .replace(',', '(')
    .concat(')');
  const keysAndValues = `${keys} VALUES ${values};`;
  return keysAndValues;
};

module.exports = {
  insertQuery,
};
