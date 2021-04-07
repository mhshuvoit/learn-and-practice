import React, { Component } from 'react';
import Puti from './Puti';

class Nati extends Component {
    render() {
        return (
            <div>
               <Puti name={this.props.name}></Puti>
            </div>
        );
    }
}

export default Nati;