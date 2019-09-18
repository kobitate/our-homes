import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'
import Map from '../../pages/Map'
import Details from '../../pages/Details'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Redirect to='/v/grid' />} />
        <Route exact path='/v/map' component={Map} />
        <Route path='/v/:viewMode' component={Home} />
        <Route path='/home/:mlsID' component={Details} />
        <Route path='/h/:mlsID' component={props => (<Redirect to={`/home/${props.match.params.mlsID}`} />)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
