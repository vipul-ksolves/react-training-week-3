import React from "react";

//css
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="navbar container-header navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fs-2" to="/">
            Ksolves
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-uppercase"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/vipul"
                >
                  Pages
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/addnew"}
                >
                  New
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
