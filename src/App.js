import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Blogs from "./components/blogs";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    window.onload = function () {
      document.getElementById("year").innerHTML = new Date().getFullYear();
    }
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="container-fluid" style={{paddingTop:"5px"}}>
              <header className="blog-header">
                <div className="nav-scroller">
                  <nav className="nav d-flex rounded-0">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blogs" className="nav-link">Blogs</Link>
                    <Link to="/about" className="nav-link">About</Link>
                  </nav>
                </div>
              </header>
            </div>
          </header>
          <div className="routes">
            <Route exact path="/" component={Home}/>
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/about" component={About} />
          </div>
          <footer className="container-fluid">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col" style={{textAlign:"center"}}>
                <span className="text-nowrap"><a href="https://github.com/timetravelingmoose/tourdesource.com" className="fab fa-github-square fa-lg">Github</a> | &#169; <span id="year"></span> tourdesource, Caleb Herbison</span>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
