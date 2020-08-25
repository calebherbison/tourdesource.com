import React from "react";

import './styles/blogs.css';

class Blogs extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-10">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Welcome to blogs!</h1>
                            <p className="lead">Search and filter blogs</p>
                        </div>
                    </div>
                    <div className="container">
                        <h3>All blogs</h3>
                    </div>
                    <ul>
                        <li>Why javascript sucks</li>
                        <li>Y.A.F.F., Yet Another Frontend Framework</li>
                        <li>A contribution to the spaghetti lord</li>
                        <li>A reactive list of recent content?</li>
                        <li>Bethesda vs. Blizzard</li>
                        <li>Blog #5</li>
                        <li>Blog #4</li>
                        <li>Blog #3</li>
                        <li>Blog #2</li>
                        <li>Blog #1</li>
                    </ul>
                </div>
                <div className="col-2 sidenav">
                    <div className="container">
                        <h3>Search</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;