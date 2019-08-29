import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Details from '../../pages/Details'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home/:mlsID' component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
