const indexRouter = require('express').Router()
const {getIndex} = require('../controler/index_controler')

indexRouter.get('/', getIndex)

module.exports = indexRouter

