import React from 'react'

export default function view({ tableHandle, view }) {
    return (
        <div>
            <div className="form-check" >
                <input type="radio"
                    name="view"
                    checked={view === 'table'}
                    value='table'
                    onChange={tableHandle}
                    className="form-check-input" />
                <label className="form-check-label" for="table" >Table</label>
            </div>
            <div className="form-check" >
                <input type="radio"
                    name="view"
                    checked={view === 'list'}
                    value='list'
                    onChange={tableHandle}
                    className="form-check-input" />
                <label className="form-check-label" for="list" >List</label>
            </div>
        </div>
    )
}
