import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ScrollUpButton from "react-scroll-up";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./components/About.js"
import Portfolio from "./components/Portfolio.js"
import Illustrations from "./components/Illustrations.js"

import Recycle from "./components/Work/Recycle.js"
import Qeesi from "./components/Work/Qeesi.js"
import Steve from "./components/Work/Steve.js"
import Visualbi from "./components/Work/Visualbi.js"

function App(){
  return(
      <div className="wrapper">
        <Header/>

        <Route exact path="/" component={Portfolio}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Illustrations" component={Illustrations}></Route>
        <Route path="/recycle" component={Recycle}></Route>
        <Route path="/qeesi" component={Qeesi}></Route>
        <Route path="/steve" component={Steve}></Route>
        <Route path="/visualbi" component={Visualbi}></Route>

        <Footer />

        <ScrollUpButton showUnder={160}>
          <span className="scroll">
            <FontAwesomeIcon
              icon={faChevronUp}
              className="fa-top"/>
          </span>
        </ScrollUpButton>

      </div>
  )
}

export default App;