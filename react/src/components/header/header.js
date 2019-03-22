import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="menu-nav">
        <ul className="menu-links">
          <li>
            <NavLink exact to="/todos">
              ToDos
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/concluidos">
              Concluídos
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
