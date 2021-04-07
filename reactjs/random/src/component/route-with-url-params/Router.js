import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class Router extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
            <Navbar/>
            <Route exact path = '/' component = {Page1}/> 
            <Route exact path = '/page2' component = {Page2}/> 
            <Route exact path = '/page3/:username' component = {Page3}/> 
            </BrowserRouter>
            </div>
        )
    }
}

export default Router;