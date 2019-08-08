const categoriesService = require('../services/categories')
async function getAll (req, res) {
    const categories = await categoriesService.getAll()
    res.json(categories)
}

async function createCategory (req, res) {
    console.log('req.body', req.body)
    const category = await categoriesService.create(req.body)
    res.json(category)
}

module.exports = {
    getAll,
    createCategory
}