import React, { Component } from 'react'; // allows us to create components 
import { Link } from 'react-router-dom'; // will allow us to link to differnt routes



export default class Navbar extends Component { // all components will start like this

    render() { // all components must render something
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to="/" className="navbar-brand">Fitness Tracker</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to=
                    "/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}