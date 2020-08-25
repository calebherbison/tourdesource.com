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
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="container-fluid">
              <header className="blog-header">
                <div className="nav-scroller py-1 mb-2">
                  <nav className="nav d-flex">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blogs" className="nav-link">Blogs</Link>
                    <Link to="/about" className="nav-link">About</Link>
                  </nav>
                </div>
              </header>
            </div>
          </header>
          <div class="routes">
            <Route exact path="/" component={Home}/>
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/about" component={About} />
          </div>
          <footer className="container-fluid">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col">
                <span className="text-nowrap">&#169; <span id="year"></span> Caleb Herbison</span> | <span class="text-nowrap"><a href="https://github.com/timetravelingmoose/tourdesource.com" class="fab fa-github-square fa-lg">Github</a></span>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
