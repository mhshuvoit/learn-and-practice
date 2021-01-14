import React from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                className={props.error ? 'form-control is-invalid' : 'form-control'}
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.onChange} />
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps = {
    type: 'text',
    label: ''
}

export default TextInput