const pool = require('../connection');
const { insertQuery } = require('../../helpers/queryify');

/**
 * Select all rows from table.
 * @param {String} table         Table name.
 */

const selectAll = table => new Promise((resolve, reject) => pool.query(`SELECT * FROM ${table}`, (err, res) => err ? reject(err) : resolve(res)));

/**
 * Select row by id from table.
 * @param {String} table          The table you want to search through.
 * @param {String} compareValue   The key of the value you wish to compare to (eg. projectId).
 * @param {Int} id                The value that will be compared to.
 */

const selectFromTableById = (table, compareValue, id) => new Promise((resolve, reject) => {
  pool.query(`SELECT * FROM ${table} WHERE ${compareValue} = ${id}`, (err, res) => {
    if (err) {
      reject(err);
    }
    if (res.length === 0) {
      resolve(`The table did not contain any rows with the id: ${id}!`);
    }
    resolve(res);
  });
});

/**
 * Insert row into table.
 * @param {string} table         tablename.
 * @param {Object} pairs         key:value pair of the required table properties.
 */

const insertIntoTable = (table, pairs) => new Promise((resolve, reject) => {
  const queryString = insertQuery(pairs);
  pool.query(`INSERT INTO ${table} ${queryString}`, (err) => {
    if (err) {
      reject(err);
    }
    resolve(`Succesfully inserted the following into the ${table} table: ${queryString}!`);
  });
});

/**
 * Delete row by id from table.
 * @param {Object} TO DO
 */

const deleteFromTableById = (table, compareValue, id) => new Promise((resolve, reject) => {
  pool.query(` TO DO `, (err) => {
    if (err) {
      reject(err);
    }
    resolve(`Succesfully deleted ${id} from ${table}`);
  });
});

/**
 * Update a row in a table by Id. Key/Value pairs of the table properties are required in the queryObject.
 * @param {Object} TO DO JO
 *
 */

const updateRowInTableById = queryObject => new Promise((resolve, reject) => {
  const {
    table,
    compareValue,
    id,
    pairs,
  } = queryObject;
  pool.query(` ${table} WHERE ${compareValue} = ${id}`, (err) => {
    if (err) {
      reject(err);
    }
    resolve(`Succesfully updated ${id} in ${table}!`);
  });
});

module.exports = {
  deleteFromTableById,
  insertIntoTable,
  selectAll,
  selectFromTableById,
  updateRowInTableById
};
