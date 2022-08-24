const router = require('express').Router()

const usersRoutes = require('./users-routes')
const listRoutes = require('./list-routes')
const itemRoutes = require('./item-routes')

router.use('/users', usersRoutes)
router.use('/lists', listRoutes)
router.use('/items', itemRoutes)

module.exports = router

