import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Map from '../../pages/Map'
import Details from '../../pages/Details'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/map' component={Map} />
        <Route path='/home/:mlsID' component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
