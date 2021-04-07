import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexFile from './components/UploadImg'
import AllImg from './components/ShowImg'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexFile} />
          <Route exact path='/allimg' component={AllImg} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App