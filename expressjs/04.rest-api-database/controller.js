const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    Contact.find() // we can candion here
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.json(err)
        })
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = new Contact({ //document
        name, phone, email
    })
    contact.save()
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.json(err)
        })
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params
    Contact.findById(id)
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.json(err)
        })
}

exports.updateContact = (req, res) => {
    let { id } = req.params
    let { name, phone, email } = req.body

    Contact.findOneAndUpdate(
        { _id: id },
        { $set: { name: name, phone: phone, email: email } },
        { new: true }
    )
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.json(err)
        })
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    Contact.findOneAndDelete({ _id: id })
        .then((r) => {
            res.json(r)
        })
        .catch((err) => {
            res.json(err)
        })
}