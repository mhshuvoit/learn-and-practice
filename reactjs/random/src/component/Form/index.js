import React, { Component } from 'react'
import Form from './Form'

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class fromHanding extends Component {
    state = {
        values: initValues,
        agreement: false,
        error: {}
    }

    handlerAgreement = (event) => {
        this.setState({
            agreement: event.target.checked
        })
    }

    onChangeHandler = (event) => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        const { isValid, error } = this.validation()
        if (isValid) {
            this.props.users(this.state.values)
            this.setState({ agreement: false, error:{}})
            event.target.reset()
        } else {
            this.setState({ error: error })
            // console.log(this.state)
        }
    }

    validation = () => {
        const error = {}
        let { name, email, password, birthDate, gender } = this.state.values
        if (!name) {
            error.name = 'Please provide your Name'
        }
        if (!email) {
            error.email = 'Please provide your Email'
        }
        if (!password) {
            error.password = 'Please provide your Password'
        }
        if (!birthDate) {
            error.birthDate = 'Please provide your birthDate'
        }
        if (!gender) {
            error.gender = 'Please provide your gender'
        }
        return {
            error: error,
            isValid: Object.keys(error).length === 0
        }
    }

    render() {
        console.log(this.state.values)
        return (
            <div className="container">
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    error={this.state.error}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    handlerAgreement={this.handlerAgreement} />
            </div>
        )
    }
}

export default fromHanding