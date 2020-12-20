import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadContacts, deleteContact, isComplete } from '../../store/actions/contactAction'
import UpdateContact from '../updateContact/updateTodo'

class List extends Component {
    state = {
        modal: false,
        updateId: ''
    }

    openUpdateModal = (id) => {
        this.setState({ modal: true, updateId: id })
    }

    closeUpdateModal = () => {
        this.setState({ modal: false })
    }

    componentDidMount() {
        this.props.loadContacts()
    }

    render() {
        let { contacts } = this.props
        return (
            <div>
                {this.props.contacts.length ?
                    <ul className="list-group">
                        {contacts.map(contact => (
                            <li className="list-group-item"
                                key={contact.id}>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                                <button
                                    onClick={() => this.props.deleteContact(contact.id)}
                                    className="btn btn-danger mr-2">delete</button>
                                <button
                                    onClick={() => this.openUpdateModal(contact.id)}
                                    className="btn btn-primary">update</button>
                                {contact.id === this.state.updateId ?
                                    <UpdateContact
                                        modalIsOpen={this.state.modal}
                                        closeModal={this.closeUpdateModal}
                                        contact={contact}
                                    /> : null}
                                <p
                                    onClick={() => this.props.isComplete(contact.id)}
                                    className="mt-3">
                                    {contact.isComplete ?
                                        <button className="btn btn-success">Compeleted</button>
                                        : <button className="btn btn-secondary">Running</button>}
                                </p>
                            </li>
                        ))}
                    </ul> :
                    <h1>There is no Contact</h1>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps, { loadContacts, deleteContact, isComplete })(List)