const Express = require('express').Router;
const productController = require('../controllers/productController');

const router = Express();

// -=-=-=-=-=-=-= CRUD =-=-=-=-=-=-=- \\
router.get('/', productController.getProducts);

router.get('/:id', productController.getProduct);

router.post('/', productController.addProduct);

router.delete('/delete/:id', productController.deleteProduct);

router.put('/update/:id', productController.updateProduct);

// -=-=-=-=-=-=-=-=STORED PROCEDURES=-=-=-=-=-=-=-=- \\

router.get('/available/:amount&:projectId', productController.spCheckProductAvailability);

router.get('/group/:groupId', productController.spCheckProductsPerGroup);

router.get('/total/:groupId', productController.spTotalProductsPerGroup);

module.exports = router;
