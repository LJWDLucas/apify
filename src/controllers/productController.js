const { selectAll, selectFromTableById, insertIntoTable } = require('../dbManager/queries/crud');
const { checkProductAvailability, checkProductsPerGroup, checkTotalProducts } = require('../dbManager/queries/productQueries');

const getProduct = (req, res, next) => {
  const query = selectFromTableById.bind(this, 'producten', 'productId');
  query(req.params.id)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const getProducts = (req, res, next) => {
  selectAll('producten')
    .then((stuff => res.json({ message: stuff })))
    .catch(err => next(err));
};

const deleteProduct = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const updateProduct = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const addProduct = (req, res, next) => {
  const query = insertIntoTable.bind(this, 'producten');
  query(req.body)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const spCheckProductAvailability = (req, res, next) => {
  checkProductAvailability(req.params.amount, req.params.projectId)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const spCheckProductsPerGroup = (req, res, next) => {
  checkProductsPerGroup(req.params.groupId)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const spTotalProductsPerGroup = (req, res, next) => {
  checkTotalProducts(req.params.groupId)
    .then(result => res.json({ message: result }))
    .catch(err => next(err));
};

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  addProduct,
  spCheckProductAvailability,
  spCheckProductsPerGroup,
  spTotalProductsPerGroup
};
