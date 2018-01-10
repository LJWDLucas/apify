const pool = require('../connection');

const usersPerGroupView = () => new Promise((resolve, reject) => pool.query('SELECT * FROM usersPerGroupView', (err, res) => err ? reject(err) : resolve(res)));

module.exports = {
  usersPerGroupView
};
