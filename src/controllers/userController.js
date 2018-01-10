const { selectAll, selectFromTableById, insertIntoTable } = require('../dbManager/queries/crud');
const { usersPerGroupView } = require('../dbManager/queries/userQueries');
const { filterById } = require('../helpers/filters');

const getUser = (req, res, next) => {
  const query = selectFromTableById.bind(this, 'accounten', 'accountId');
  query(req.params.id)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const getUsers = (req, res, next) => {
  const query = selectAll('accounten');
  query
    .then((stuff => res.json({ message: stuff })))
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const updateUser = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const addUser = (req, res, next) => {
  const query = insertIntoTable.bind(this, 'accounten');
  query(req.body)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const usersPerGroup = (req, res, next) => {
  usersPerGroupView()
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const addUserToSubtype = (req, res, next) => {
  Promise.all(['bedrijven', 'particulieren'].map(table => selectAll(table)))
    .then(result => result.map(set => filterById(set, 'accountId', req.body.accountId)))
    .then(result => result[0].length === 0 && result[1].length === 0 ?
      insertIntoTable(req.body.table, { accountId: req.body.accountId }) :
      `User with the accountId: ${req.body.accountId} already has a home!`)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUser,
  usersPerGroup,
  addUserToSubtype
};
