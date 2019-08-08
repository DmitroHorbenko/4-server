const Category = require('../models/category')
async function getAll() {
    const categories = await Category.find()
    return categories
}

async function create(category) {
    const data = await Category.create(category)
    return data
}

module.exports = {
    getAll,
    create
}