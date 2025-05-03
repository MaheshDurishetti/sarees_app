import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { create } from './Cart';

const Header = () => {
  const { cartCount } = useContext(create); // fixed here

  return (
    <nav className="navbar navbar-expand-lg bg-warning text-dark p-3">
      <div className="container-fluid">
        <h2 className="navbar-brand">PATTU SAREES</h2>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <select className="form-select">
                <option value="">-- Choose your clothes --</option>
                <option value="Saree">Saree</option>
                <option value="Dress">Dress</option>
                <option value="Lehenga">Lehenga</option>
              </select>
            </li>
            <li className="nav-item">
              <span className="nav-link">TELANGANASAREES</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <FiShoppingCart /> {cartCount}
              </span>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
