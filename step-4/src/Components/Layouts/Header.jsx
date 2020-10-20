import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="menuActive">
            MAIN
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/page1" activeClassName="menuActive">
            PAGE-1
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/page2" activeClassName="menuActive">
            PAGE-2
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/page3" activeClassName="menuActive">
            PAGE-3
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
