const mysql = require('mysql');

const config = {
  connectionLimit: 10, host: 'localhost', user: 'root', password: null, database: 'apify'
};
const connectionPool = mysql.createPool(config);

connectionPool.on('acquire', () => console.log('Acquired connection!'));
connectionPool.on('release', () => console.log('Released connection!'));

module.exports = connectionPool;
