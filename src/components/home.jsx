import React from "react";

import './styles/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-10">
                    <div className="jumbotron jumbotron-fluid d-sm-none d-md-block">
                        <h1 className="display-4">Welcome to home!</h1>
                        <p className="lead">Cool stuff goes here</p>
                    </div>
                    <div className=".container-fluid">
                        <h3>Most recent posts</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;