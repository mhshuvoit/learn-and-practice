class Contact {
    constructor() {
        this.contacts = []
    }

    getAllContact() {
        return this.contacts
    }

    getContactById(id) {
        return this.contacts.find(contact => contact.id === id)
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        
        return contact
    }

    updateContactById(id, upDatedcontact) {
        let index = this.contacts.findIndex(con => con.id === id)
        this.contacts[index].name = upDatedcontact.name || this.contacts[index].name
        this.contacts[index].phone = upDatedcontact.phone || this.contacts[index].phone
        this.contacts[index].email = upDatedcontact.email || this.contacts[index].email

        return this.contacts[index]
    }

    deleteContactById(id) {
        const deleteObj = this.contacts.find(contact => contact.id === id)
        this.contacts = this.contacts.filter(c => c.id !== id)

        return deleteObj
    }
}

module.exports = new Contact()