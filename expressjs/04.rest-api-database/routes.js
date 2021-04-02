const routes = require('express').Router()
const { getAllContact, createContact, getSingleContact, updateContact, deleteContact } = require('./controller')

routes.get('/', getAllContact)
routes.post('/', createContact)
routes.get('/:id', getSingleContact)
routes.put('/:id', updateContact)
routes.delete('/:id', deleteContact)

module.exports = routes