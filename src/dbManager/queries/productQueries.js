const pool = require('../connection');

const checkProductAvailability = (aantal, projectId) => new Promise((resolve, reject) => pool
  .query(`CALL SP_CheckProductAvailability(${aantal}, ${projectId})`, (err, res) => err ? reject(err) : resolve(res)));

const checkProductsPerGroup = groepId => new Promise((resolve, reject) => pool
  .query(`CALL SP_CheckProductenPerGroup(${groepId})`, (err, res) => err ? reject(err) : resolve(res)));

const checkTotalProducts = groepId => new Promise((resolve, reject) => pool
  .query(`CALL SP_TotalProductsPerGroep(${groepId})`, (err, res) => err ? reject(err) : resolve(res)));


module.exports = {
  checkProductAvailability,
  checkProductsPerGroup,
  checkTotalProducts
};
