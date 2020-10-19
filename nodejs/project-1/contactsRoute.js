const router = require('express').Router()
const { getAllController, createController, getSingleController, updateController, deleteController } = require('./contactController')

router.get('/', getAllController)
router.post('/', createController)
router.get('/:id', getSingleController)
router.put('/:id', updateController)
router.delete('/:id', deleteController)

module.exports = router