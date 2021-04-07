import React, { Component } from 'react';
import {PutiConsumer} from './Mycontext'

class Puti extends Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.name}</h1> */}
                <h1>
                     <PutiConsumer>
                    {
                    msz =>{
                        return msz
                    }
                    }
                </PutiConsumer>
                </h1>
               
            </div>
        )
    }
}

export default Puti;