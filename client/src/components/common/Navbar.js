import React from 'react'
// import Home from './Home'
import {NavLink} from "react-router-dom"
// import "./navbar.css"
import "../../bootstrap.css"


class NavBar extends React.Component{


render(){
    return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={null}><i className="fa fa-book mr-1" aria-hidden="true"></i>Contact Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <NavLink 
                            className="nav-link" 
                            to="/contacts" 
                            activeClassName="active">Contacts <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink 
                            className="nav-link" 
                            to="# " 
                            onClick={this.props.handleLogout}
                            activeClassName="active">Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
}

export default NavBar