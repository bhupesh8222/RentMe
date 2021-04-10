import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rent Me
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Top Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                      Books
                    </Link>
                  </li><li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Mobile Accessories
                    </Link>
                  </li><li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                    Cycle
                    </Link>
                  </li><li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                    Mini Appliances
                    </Link>
                  </li><li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Sport Equipment
                    </Link>
                  </li><li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                      Car&Bike Accessories
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      Fashion & Jwellery
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/500">
                      500 Internal Server Error
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="cycle" to="/category">
                  T shirts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="book" to="/category">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="mini appliance" to="/category">
                  Mini Appliances
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Mobile Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                Car & Bike Accessories
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Fashion & Jewellery
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/documentation">
                  Documentation
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
