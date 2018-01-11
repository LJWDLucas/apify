const pool = require('../connection');

const usersPerGroupView = () => new Promise((resolve, reject) => pool.query('SELECT * FROM usersPerGroupView', (err, res) => err ? reject(err) : resolve(res)));

const insertUserSP = pairs => new Promise((resolve, reject) => {
  const q = 'CALL SP_InsertIntoAccounten(?, ?, ?, ?, ?, ?, ?, @accountId); SELECT @accountId;';
  const v = Array.from(Object.values(pairs));
  return pool.query(q, v, (err, res) => err ? reject(err) : resolve(res));
});

module.exports = {
  usersPerGroupView,
  insertUserSP
};
