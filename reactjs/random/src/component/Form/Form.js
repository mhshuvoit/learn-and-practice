import React from 'react'
import TextInput from './input'
import PropTypes from 'prop-types'

function Form(props) {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <TextInput
                type="name"
                label='Enter Name'
                name='name'
                error = {props.error.name}
                value={props.values.name}
                onChange={props.onChangeHandler} />

            <TextInput
                type="email"
                label='Enter Email'
                name="email"
                error = {props.error.email}
                value={props.values.email}
                onChange={props.onChangeHandler} />

            <TextInput
                type="password"
                label='Enter password'
                name="password"
                error = {props.error.password}
                value={props.values.password}
                onChange={props.onChangeHandler} />

            <TextInput
                type='date'
                label='birthdate'
                name="birthDate"
                error = {props.error.birthDate}
                value={props.values.birthDate}
                onChange={props.onChangeHandler} />

            <div className="form-group">
                <label>
                <input
                    type="radio"
                    name='gender'
                    value='male'
                    onChange={props.onChangeHandler} /> Male
                    </label>
            </div>
            <div className="form-group">
                <label>
                <input
                    type="radio"
                    name='gender'
                    value='female'
                    onChange={props.onChangeHandler} /> Female
                    </label>
            </div>
            <div className="form-group">
                <label>
                <input
                    type="radio"
                    name='gender'
                    value='other'
                    onChange={props.onChangeHandler} /> Other
                    </label>
            </div>
                {props.error.gender && <div className="invalid-feedback">{props.error.gender}</div>}
            <div className="form-group">
                <label>
                <input
                    type="checkbox"
                    name='agreement'
                    checked={props.agreement }
                    onChange={props.handlerAgreement} /> I agree
                    </label>
            </div>

            <button 
            className="btn btn-primary" 
            type="submit"
            disabled={!props.agreement}>submit</button>
        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
    agreement: PropTypes.bool.isRequired,
    handlerAgreement: PropTypes.func.isRequired
}

export default Form
