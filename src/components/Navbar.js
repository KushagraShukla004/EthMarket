import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#3b5474" }}
      >
        <span
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "#04e3fb" }}
        >
          EthMarket
        </span>
        <ul className="navbar-nav px-3">
          <li
            className="nav-item text-nowrap d-none d-sm-none d-sm-block"
            style={{ color: "#04e3fb" }}
          >
            Hello,
            <code className="text-white">
              <span id="account">{this.props.account}</span>
            </code>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
