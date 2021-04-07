import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Page2 extends Component {
    constructor() {
        super()
        this.state = {
            passdata: 'mhshuvo'
        }
    }
    render() {
        var para = "/page3/" + this.state.passdata
        return (
            <div>
                <h1>Page2</h1>
                {/* <button><Link to = '/page3/mhshuvo'>Pass my name</Link></button> */}
                <button><Link to = {para}>Pass my name</Link></button>
            </div>
        );
    }
}

export default Page2;