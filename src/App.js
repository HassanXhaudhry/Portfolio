import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componenst/Navbar';
import './App.css'
import Header from './componenst/Header';

const App = () => {
  return (
    <Fragment>
    <Navbar />
    <Header />
    </Fragment>
  )
}

export default App