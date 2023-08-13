import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage';
import RegistrationPage from './Registration';
import Notfound from './Notfound';
import ProductList from './productlist';
import PaymentPage from './payment';




function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/registration" element={<RegistrationPage />} />
        <Route exact path="/products" element={<ProductList/>}/>
        <Route exact path="/payment" element={<PaymentPage/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

