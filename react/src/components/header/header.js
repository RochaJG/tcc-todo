import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="menu-nav">
        <ul className="menu-links">
          <li>
            <NavLink exact={true} to="/">
              ToDos
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to="/concluidos">
              Concluídos
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
