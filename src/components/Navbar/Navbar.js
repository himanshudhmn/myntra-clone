import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../IMG/myntra.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const menu = ["Mens", "Womens", "Kids", "Offer"];

const Navbar = (props) => {
  const wishlistData = useSelector((state) => state.datastore.value.wishlist);

  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo} alt="logo" height="50px" />
          </div>
        </div>
        <div className="nav-links">
          {menu.map((item) => (
            <div className="content" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} className="font-color" />
          <input
            className="search"
            type="search"
            placeholder="Search for Products, brands and more..."
          />{" "}
        </div>
        <div className="nav-links">
          {/* Profile */}
          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="font-color" />
            <p>Profile</p>
          </div>

          {/* Whishlist */}
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} className="font-color" />
            <p>
              Wishlist {`${wishlistData.length > 0 ? wishlistData.length : ""}`}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
