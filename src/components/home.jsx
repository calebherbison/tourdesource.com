import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-10">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Welcome to home!</h1>
                            <p className="lead">Cool stuff goes here</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 sidenav">
                    <div className="container">
                        <h3>Most recent posts</h3>
                    </div>
                    <ul>
                        <li>Why javascript sucks</li>
                        <li>Y.A.F.F., Yet Another Frontend Framework</li>
                        <li>A contribution to the spaghetti lord</li>
                        <li>A reactive list of recent content?</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;