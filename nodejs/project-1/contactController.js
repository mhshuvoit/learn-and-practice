const contacts = require('./Contacts')

exports.getAllController = (req, res) => {
    res.json(contacts.getAllContact())
}

exports.createController = (req, res) => {
    let { name, phone, email } = req.body

    let contact = contacts.createContact({
        name, phone, email
    })
    res.json(contact)
}

exports.getSingleController = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.getContactById(id)
    res.json(contact)
}

exports.updateController = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let {name, email, phone} = req.body
    
    let contact = contacts.updateContactById(id, {
        name, phone, email
    })
    res.json(contact)
}

exports.deleteController = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(contact)
}