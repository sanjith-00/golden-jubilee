/* eslint-disable */
import React from 'react';
import './App.css';
import Home from './components/Home';
import Event from './components/events'
import Route from "./components/Route"
import Register from './components/registration';

  
function App() {
  return (
    <div className="App">
    <Route path="/">
        <Home />
      </Route>
      <Route path="/events">
        <Event />
      </Route>
      <Route path="/registration">
        <Register/>
      </Route>
    </div>
  );
}

export default App; 
