const express = require('express')
const router = express.Router()

const {getAllProducts, getProductById} = require('../controller/productControllers')


//@Description GET ALL PRODUCTS FROM DB
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@Description GET ALL PRODUCTS FROM DB
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router
