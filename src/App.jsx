import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'; 
import OrderPage from './pages/OrderPage.jsx'; 
import ResultPage from './pages/ResultPage.jsx'; 

function App() {

  return (
    <>
    <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/pizza" component={OrderPage} exact />
    <Route path="/result" component={ResultPage} exact />
  </Switch>
    </>
  )
}

export default App
