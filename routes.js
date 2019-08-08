const router = require('express').Router()
const {
    getAll: getAllCategories,
    createCategory} = require('./controllers/categories')


router.get('/category', getAllCategories)
router.post('/category', createCategory)

router.get('/product', getAllCategories)
router.post('/product', createCategory)

module.exports = router