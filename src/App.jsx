import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import OrderPage from './pages/OrderPage'; 
import ResultPage from './pages/ResultPage'; 
import Layout from './Layout';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/pizza" component={OrderPage} exact />
        <Route path="/result" component={ResultPage} exact />
      </Switch>
    </Layout>
  )
}

export default App
