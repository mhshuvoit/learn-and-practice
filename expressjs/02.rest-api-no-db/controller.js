const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    res.json(Contact.getAllContact())
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = Contact.createContact({
        name, phone, email
    })
    res.json(contact)
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let contact = Contact.getContactById(id)
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let { name, phone, email } = req.body

    let contact = Contact.updateContactById(id, {
        name, phone, email
    })
    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = Contact.deleteContactById(id)
    res.json(contact)
}