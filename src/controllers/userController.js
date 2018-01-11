const { selectAll, selectFromTableById, insertIntoTable } = require('../dbManager/queries/crud');
const { usersPerGroupView, insertUserSP } = require('../dbManager/queries/userQueries');
const { getSubtypeOf } = require('../dbManager/queries/genericQueries');

const userController = () => {
  const subTypes = ['bedrijven', 'particulieren'];
  const table = 'accounten';
  const idProperty = 'accountId';

  const getUser = (req, res, next) => {
    selectFromTableById(table, idProperty, req.params.id)
      .then(result => res.json({ message: result }))
      .catch(err => next(err));
  };

  const getUsers = (req, res, next) => {
    selectAll(table)
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
    insertIntoTable(table, req.body)
      .then(result => res.json({ message: result }))
      .catch(err => next(err));
  };

  const usersPerGroup = (req, res, next) => usersPerGroupView()
    .then(result => res.json({ message: result }))
    .catch(err => next(err));

  const addUserToSubtype = (req, res, next) => getSubtypeOf(subTypes, idProperty, req.body.accountId)
    .then(result => result === false ? insertIntoTable(req.body.table, { [idProperty]: req.body.accountId }) :
      `User with the accountId: ${req.body.accountId} already has a home @ ${subTypes[result]}`)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));

  const insertUserProcedure = (req, res, next) => {
    insertUserSP(req.body)
      .then(result => res.json({ message: result }))
      .catch(err => next(err));
  };

  return {
    getUser, getUsers, deleteUser, updateUser, addUser, usersPerGroup, addUserToSubtype, insertUserProcedure
  };
};

module.exports = { userController };
// const getUser = (req, res, next) => {
//   const query = selectFromTableById.bind(this, 'accounten', 'accountId');
//   query(req.params.id)
//     .then(result => res.json({ message: result }))
//     .catch(err => next(err));
// };

// const getUsers = (req, res, next) => {
//   const query = selectAll('accounten');
//   query
//     .then((stuff => res.json({ message: stuff })))
//     .catch(err => next(err));
// };

// const deleteUser = (req, res, next) => {
//   res.json({ message: 'Currently unavailable endpoint!' });
// };

// const updateUser = (req, res, next) => {
//   res.json({ message: 'Currently unavailable endpoint!' });
// };

// const addUser = (req, res, next) => {
//   const query = insertIntoTable.bind(this, 'accounten');
//   query(req.body)
//     .then(result => res.json({ message: result }))
//     .catch(err => next(err));
// };

// const usersPerGroup = (req, res, next) => usersPerGroupView()
//   .then(result => res.json({ message: result }))
//   .catch(err => next(err));

// const addUserToSubtype = (req, res, next) => Promise.all(['bedrijven', 'particulieren'].map(table => selectAll(table)))
//   .then(result => result.map(set => filterById(set, 'accountId', req.body.accountId)))
//   .then(result => result[0].length === 0 && result[1].length === 0 ?
//     insertIntoTable(req.body.table, { accountId: req.body.accountId }) :
//     `User with the accountId: ${req.body.accountId} already has a home!`)
//   .then(result => res.json({ message: result }))
//   .catch(err => next(err));

// module.exports = {
//   // userController
//   // getUser,
//   // getUsers,
//   // deleteUser,
//   // updateUser,
//   // addUser,
//   // usersPerGroup,
//   // addUserToSubtype
// };
