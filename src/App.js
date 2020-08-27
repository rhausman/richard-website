import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
//import custom components

//import RNavbar from './Components/RNavbar'
import HomePage from './HomePage';

//assets
//import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//setup
const history = createHistory();

//const homepage = <HomePage parallaxImage={parallaxImage} />
function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
      
    </Router>
  );
}

export default App;