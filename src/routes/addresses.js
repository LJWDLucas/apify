const Express = require('express').Router;
const {
  getAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  addAddress,
} = require('../controllers/addressController');

const router = Express();

router.get('/:id', getAddress);

router.get('/', getAddresses);

router.post('/', addAddress);

router.delete('/delete/:id', deleteAddress);

router.put('/update/:id', updateAddress);

module.exports = router;
