const Express = require('express');
const users = require('./routes/users');
const projects = require('./routes/projects');
const products = require('./routes/products');
const addresses = require('./routes/addresses');

const router = Express();

router.use('/users', users);
router.use('/projects', projects);
router.use('/products', products);
router.use('/addresses', addresses);

module.exports = router;
