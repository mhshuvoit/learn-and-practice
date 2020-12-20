import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSearch, searchResult } from '../../store/actions/contactAction'

class search extends Component {
    state = {
        search: ''
    }

    render() {
        return (
            <div>
                <input type="text"
                    className="form-control"
                    placeholder="search"
                    value={this.state.search}
                    onChange={handleSearch} />
            </div>
        )
    }
}

export default connect(null, { handleSearch })(search)