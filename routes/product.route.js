const productController = require('../controllers/product.controller')

const express = require('express')
const router = express.Router()

router.get('/test', productController.test)
router.get('/products', productController.products)
router.post('/create', productController.productCreate)
router.get('/:id', productController.productDetail)
router.patch('/:id', productController.productUpdate)
router.delete('/:id', productController.productDelete)


module.exports = router
