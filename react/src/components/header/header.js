import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav class="menu-nav">
        <ul class="menu-links">
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
