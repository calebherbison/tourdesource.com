import React from "react";
import './styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div className="row content">
        <div className="col-10">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">About</h1>
            </div>
          </div>
          <p>A professional software engineer with a focus in software delivery, site reliability engineering, and security.</p>
        </div>
      </div>
    );
  }
}

export default About;