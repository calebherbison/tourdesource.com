import React from "react";

import './styles/blogs.css';

class Blogs extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-10">
                    <div className="jumbotron jumbotron-fluid">
                        <h1>Welcome to blogs!</h1>
                        <p>Search and filter blogs</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className=".container-fluid">
                                <h3>Search results</h3>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;