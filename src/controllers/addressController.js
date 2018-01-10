const { selectAll, selectFromTableById } = require('../dbManager/queries/crud');

const getAddress = (req, res, next) => {
  const query = selectFromTableById.bind(this, 'adressen', 'adresId');
  query(req.params.id)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const getAddresses = (req, res, next) => {
  const result = selectAll('adressen');
  result.then((stuff => res.json({ message: stuff })))
    .catch(err => next(err));
};

const deleteAddress = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const updateAddress = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const addAddress = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

module.exports = {
  getAddress,
  getAddresses,
  deleteAddress,
  updateAddress,
  addAddress
};
