import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { updateContact } from '../../store/actions/contactAction'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

class modal extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
    }

    componentDidMount() {
        this.setState({
            name: this.props.contact.name,
            email: this.props.contact.email,
            phone: this.props.contact.phone
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    updateContacts = (event) => {
        event.preventDefault()
        this.props.updateContact(this.props.contact.id, {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        })
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                >
                    <form onSubmit={this.updateContacts}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                value={this.state.name}
                                type="text"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                value={this.state.email}
                                type="email"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={this.state.phone}
                                type="number"
                                onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-primary">update connect</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { updateContact })(modal)
