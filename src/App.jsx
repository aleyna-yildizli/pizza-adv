import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import OrderPage from './pages/OrderPage'; 
import ResultPage from './pages/ResultPage'; 
import Layout from './Layout';



function App() {    

  return (
    <Layout>
      <Switch>
        <Route path="/pizza">
          <OrderPage />
        </Route>
        <Route path="/result">
          <ResultPage />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Layout>
  )
}

export default App
