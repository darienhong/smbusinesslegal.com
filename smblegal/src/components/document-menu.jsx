import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Formation from '../document types/Formation.jsx';
import Governance from '../document types/Governance.jsx';
import Employment from '../document types/Employment.jsx';
import Covid_19 from '../document types/COVID-19.jsx';
import Homepage from '../Homepage.jsx';

export default class DocumentMenu extends Component { 

    render() {
        return (
            <Router> 
               
            <div class="features">
             <p> <span class="formation"><Link to="/Formation"> Formation </Link></span></p>
             <p> <span class="governance">  <Link to="/Governance"> Governance </Link> </span></p>
             <p> <span class="employment">  <Link to="/Employment"> Employment </Link> </span></p>
             <p><span class="covid-19">  <Link to="/Covid_19">Covid-19 </Link>  </span></p>
            

        <Switch>
          <Route path="/Formation">
            <Formation />
          </Route>
          <Route path="/Governance">
            <Governance />
          </Route>
          <Route path="/Employment">
            <Employment />
          </Route>
          <Route path="/Covid_19">
            <Covid_19 />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
                </div>

            </Router>

        );
    }
}