const filterById = (arrayToFilter, idtype, id) => arrayToFilter.filter(element => element[idtype] === id);

module.exports = {
  filterById
};
