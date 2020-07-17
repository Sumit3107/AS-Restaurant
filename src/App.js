import React from 'react';
import './main.css';
import Header from './components/Header'
import Owner from './components/Owner'
import Footer from './components/Footer'
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Owner />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
