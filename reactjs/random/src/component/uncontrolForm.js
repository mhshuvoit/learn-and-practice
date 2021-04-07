import React, { Component } from 'react'

class UncontrolForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    className="form-control"
                    name="name" />
                <input
                    type="email"
                    className="form-control"
                    name="email" />
                <input
                    type="password"
                    className="form-control"
                    name="password" />
                    <button type="submit" >submit</button>
            </form>
        )
    }
}

export default UncontrolForm
