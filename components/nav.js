import React from "react";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand">
      <a className="navbar-brand" href="/">
        Eva Denys
      </a>
      <div className="mr-auto"></div>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">
            Blog
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
