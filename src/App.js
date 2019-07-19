import React from 'react';
import LandingPage from "./components/LandingPage/index";
import PostListing from "./components/PostListing/index";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/postlisting' component={PostListing}/>
          </Switch>  
        </BrowserRouter>  
    </div>
  );
}

export default App;
