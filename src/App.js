import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Container from './components/Container.js';
import About from "./components/About.js"
import Work from "./components/Work.js"

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
        <Header />

        <nav className="nav">
        <NavLink to="/work" className="nav-item" activeClassName="active">work</NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active">about</NavLink>
        <a className="nav-item" target="_blank" href="https://drive.google.com/file/d/14q--1Jai04kww3p0JD_hrt8MoGQ85b0N/view?usp=sharing"><span>resume</span></a>
        </nav>

        {/* <Route exact path="/" component={Work}></Route> */}
        <Route path="/work" component={Work}></Route>
        <Route path="/about" component={About}></Route>
        
        <Footer />
      </div>
  )
}

export default App;
