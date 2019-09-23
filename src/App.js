import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./components/About.js"
import Work from "./components/Work.js"
import Illustrations from "./components/Illustrations.js"

import Recycle from "./components/Work/Recycle.js"
import Qeesi from "./components/Work/Qeesi.js"
import Steve from "./components/Work/Steve.js"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Footer />
//     </div>
//   );

// }


function App(){
  return(
      <div className="wrapper">
        <Header/>

        <Route exact path="/" component={Work}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Illustrations" component={Illustrations}></Route>
        <Route path="/recycle" component={Recycle}></Route>
        <Route path="/qeesi" component={Qeesi}></Route>
        <Route path="/steve" component={Steve}></Route>

        <Footer />
      </div>
  )
}

export default App;
