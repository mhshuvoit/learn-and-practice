  import React, { Component, Fragment } from 'react';

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <h1 className='notFoundh1'>404 | PAGE NOT FOUND</h1>
                <p className= "notFoundp">The resource requested could not be found on this server!</p>
            </Fragment>
        )
    }
}

export default NotFound;