import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar display-4 navbar-expand-sm  bg-dark">
        <a className="navbar-brand display-3 text-light" href="#">
          LIBRARY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse  navbar-collapse text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link text-warning" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
