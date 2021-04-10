import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Books
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Cycle
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Mini Appliances
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Mobile Accessories
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
           Car & Bike Acessories</Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Fashion & Jwellery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
