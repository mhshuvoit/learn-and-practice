import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    addItem = () => {
        if (this.state.value) {
            this.props.addToShowcase(this.state.value)
            this.setState({ value: '' })
        }
    }

    render() {
        return (
            <div className='d-flex my-3'>
                <input
                    type="text"
                    name="item"
                    className="form-control mr-2"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <button
                    onClick={this.addItem}
                    className='btn btn-sm btn-primary'
                >AddItem</button>
            </div>
        )
    }
}

const ItemList = ({ items }) => {
    return (
        <ul className="list-group">
            {items.map(lang => (
                <li className="list-group-item" key={lang}>
                    {lang}
                </li>
            ))}
        </ul>
    )
}

// Main component
const Showcase = ({ user, addToShowcase }) => {
    return (
        <div>
            <h3>{user.name} Showcase: </h3>
            <AddItem addToShowcase={addToShowcase} />
            <ItemList items={user.languages} />
        </div>
    )
}

export default Showcase