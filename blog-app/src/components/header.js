import React, { Component } from 'react'
import { newsCategory } from './newsCategory'

class header extends Component {
    

    render() {
        let { category, changeCategory, onChangeHandler } = this.props
        return (
            <div>
                <input type="text"
                    className="form-control mb-5"
                    name='search'
                    onChange={onChangeHandler}
                />
                {Object.keys(newsCategory).map(item => {
                    if (category === item) {
                        return (
                            <button
                                onClick={() => changeCategory(item)}
                                className="btn btn-sm btn-warning mb-5" >{`#${newsCategory[item]}`}</button>
                        )
                    } else {
                        return (
                            <button
                                onClick={() => changeCategory(item)}
                                className="btn btn-sm btn-light mb-5">{`#${newsCategory[item]}`}</button>
                        )
                    }
                })}
            </div>
        )
    }
}

export default header
