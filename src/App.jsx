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

 const formDataOnChange = (newData) => {
  setFormData(newData);
 }

  return (
    <Layout>
      <Switch>
        
         <Route path="/pizza">
          <OrderPage formDataOnChange={formDataOnChange} formData={formData} />
        </Route>
        <Route path="/result">
          <ResultPage formData={formData} />
        </Route>
        <Route path="/" component={HomePage}  />
      </Switch>
    </Layout>
  )
}

export default App
