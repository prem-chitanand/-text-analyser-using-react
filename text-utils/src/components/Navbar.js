import React from 'react'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    return ( 
        <nav className="navbar navbar-inverse navbar-fixed top">
        <div className="conatiner">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand">{props.title}</Link>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="nav navbar-nav">
        <li><Link to="/about">{props.about}</Link></li>
        <li><Link to="/contact">{props.contact}</Link></li>
        </ul>
        </div>
        </div>
</nav>
    );
    }

