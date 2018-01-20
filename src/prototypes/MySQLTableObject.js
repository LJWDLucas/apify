const crud = require('../dbManager/queries/crud');

function MySQLTableObject(table, idProperty) {
  this.table = table;
  this.property = idProperty;
}

MySQLTableObject.prototype.getOne = function (param) {
  return crud.selectFromTableById(this.table, this.property, param);
};

MySQLTableObject.prototype.getAll = function () {
  return crud.selectAll(this.table);
};

MySQLTableObject.prototype.insert = function (params) {
  return crud.insertIntoTable(this.table, params);
};

module.exports = { MySQLTableObject };
