import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadContacts, deleteContact, isComplete } from '../../store/actions/contactAction'
import UpdateContact from '../updateContact/updateTodo'

class Table extends Component {
    state = {
        modal: false,
        updateId: ''
    }

    componentDidMount() {
        this.props.loadContacts()
    }

    openUpdateModal = (id) => {
        this.setState({ modal: true, updateId: id })
    }
    
    closeUpdateModal = () => {
        this.setState({ modal: false })
    }

    render() {
        let { contacts } = this.props
        console.log(contacts)
        return (
            <div>
                {contacts.allContacts.length > 0 ?
                    <table className="table">
                        <thead>
                            <th>select</th>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>delete</th>
                            <th>update</th>
                            <th>actions</th>
                        </thead>
                        <tbody>
                            {contacts.allContacts.map(contact => (
                                <tr key={contact.id}>
                                    <th>
                                        <div class="form-check">
                                            <input type="checkbox" className="form-check-input" id="check" />
                                        </div>
                                    </th>
                                    <th>{contact.name}</th>
                                    <th>{contact.email}</th>
                                    <th>{contact.phone}</th>
                                    <th><button
                                        onClick={() => this.props.deleteContact(contact.id)}
                                        className="btn btn-danger mr-2">delete</button></th>
                                    <th> <button
                                        onClick={() => this.openUpdateModal(contact.id)}
                                        className="btn btn-primary">update</button></th>
                                    <th
                                        onClick={() => this.props.isComplete(contact.id)}>
                                        {contact.isComplete ?
                                            <button className="btn btn-success">Compeleted</button>
                                            : <button className="btn btn-secondary">Running</button>}
                                    </th>
                                    {contact.id === this.state.updateId ?
                                        <UpdateContact
                                            modalIsOpen={this.state.modal}
                                            closeModal={this.closeUpdateModal}
                                            contact={contact}
                                        /> : null}
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <h1>There is no Contact</h1>}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps, { loadContacts, deleteContact, isComplete })(Table)