import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Blogs from "./components/blogs";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div class="container-fluid">
              <header class="blog-header">
                <div class="nav-scroller py-1 mb-2">
                  <nav class="nav d-flex">
                    <Link to="/" class="nav-link">Home</Link>
                    <Link to="/blogs" class="nav-link">Blogs</Link>
                    <Link to="/about" class="nav-link">About</Link>
                  </nav>
                </div>
              </header>
            </div>
          </header>
          <body>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
          </body>
          <footer class="container-fluid">
            <div class="row flex-nowrap justify-content-between align-items-center">
              <div class="col">
                <span class="text-nowrap">&#169; <span id="year"></span> Caleb Herbison</span> | <span class="text-nowrap"><a href="https://github.com/timetravelingmoose/tourdesource.com" class="fab fa-github-square fa-lg">Github</a></span>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
