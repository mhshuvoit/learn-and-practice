import React, { Component } from 'react';
import Context from './userContext'

class AddItem extends Component {
    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    addItem = () => {
        if (this.state.value) {
            this.context.addToShowcase(this.state.value)
            this.setState({ value: '' })
        }
    }

    render() {
        return (
            <div className='d-flex my-3'>
                <input
                    type="text"
                    className="form-control mr-2"
                    value={this.state.value}
                    onChange={this.handleChange} />

                <button
                    onClick={this.addItem}
                    className='btn btn-sm btn-primary btn-clock'
                >AddItem</button>
            </div>
        )
    }
}

AddItem.contextType = Context

const ItemList = () => {
    return (
        <Context.Consumer>
            {({ user }) => (
                <ul className="list-group">
                    {user.languages.map(lang => (
                        <li className="list-group-item" key={lang}>
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </Context.Consumer>
    )
}

// Main component
const Showcase = () => {
    return (
        <Context.Consumer>
            {({ user }) => (
                <div>
                    <h3>{user.name} Showcase: </h3>
                    <AddItem />
                    <ItemList />
                </div>
            )}
        </Context.Consumer>
    )
}

export default Showcase