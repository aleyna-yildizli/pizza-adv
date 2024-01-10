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
        
        <Route path="/pizza" component={OrderPage}  />
        <Route path="/result" component={ResultPage}  />
        <Route path="/" component={HomePage}  />
      </Switch>
    </Layout>
  )
}

export default App
