import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isIditable: false
    }

    isIditable = () => {
        this.setState({ isIditable: !this.state.isIditable })
    }

    render() {
        let { nextPage, prevPage, jumpPageValue, gotoPage, isPrevPage, isNextPage } = this.props
        return (
            <div className="d-flex my-5">
                <button
                    onClick={prevPage}
                    disabled={!isPrevPage}
                    className="btn btn-primary">Prev</button>
                {this.state.isIditable === true ?
                    <input type="number"
                        className="form-control"
                        onChange={jumpPageValue}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                gotoPage()
                                this.isIditable()
                            }
                        }}
                        onDoubleClick={this.isIditable}
                    />
                    : <button
                        onDoubleClick={this.isIditable}
                        className="btn btn-warning ml-5 mr-5">Double Tab to Edit</button>
                }
                <button
                    className="btn btn-primary"
                    disabled={!isNextPage}
                    onClick={nextPage}>Next</button>
            </div>
        )
    }
}

export default Pagination
