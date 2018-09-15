import React, { Component } from "react";
// c.1 Import + Configure the NavLink
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        {/* c.2 instantiate nav links to '/', '/cv', '/projects' routes
            - navlink has activeClassName 'navitem--selected'
        */}
        <NavLink exact activeClassName="navitem--selected" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="navitem--selected" to="/cv">
          C.V.
        </NavLink>
        <NavLink exact activeClassName="navitem--selected" to="/projects">
          Projects
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
