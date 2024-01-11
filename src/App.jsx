import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import OrderPage from './pages/OrderPage'; 
import ResultPage from './pages/ResultPage'; 
import Layout from './Layout';


const initialForm = {
  size: "",
  hamur: "",
  ingredients: [],
  message: "",
  name: ""
 }

function App() {
 const [formData, setFormData] = useState(initialForm);
 const [count, setCount] = useState(1);

 const formDataOnChange = (newData) => {
  setFormData(newData);
 }

 const countOnChange = (value) => {
  setCount(value);
 }


  return (
    <Layout>
      <Switch>
        <Route path="/pizza">
          <OrderPage formDataOnChange={formDataOnChange} formData={formData} countOnChange={countOnChange} count={count} />
        </Route>
        <Route path="/result">
          <ResultPage formData={formData} count={count} />
        </Route>
        <Route path="/" component={HomePage}  />
      </Switch>
    </Layout>
  )
}

export default App
