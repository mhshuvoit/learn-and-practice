import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterHandler } from '../../store/actions/contactAction'

class Filter extends Component {
    render() {
        return (
            <div className="my-3">
                <button
                    className="btn btn-success"
                    onClick={() => this.props.filterHandler('all')}>All</button>
                <button
                    className="btn btn-success mr-2 ml-2"
                    onClick={() => this.props.filterHandler('running')}>Running</button>
                <button
                    className="btn btn-success"
                    onClick={() => this.props.filterHandler('complete')}>Complete</button>
            </div>
        )
    }
}

export default connect(null, { filterHandler })(Filter)