import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../redux/Data.js";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const productData = useSelector((state) => state.datastore.value.data);
  const dispatch = useDispatch();
  // let arr = [];
  // if (props.fil) arr = [...props.products];
  // else arr = [...productData];

  return (
    <React.Fragment>
      <div className="container">
        <div className="p-wrapper">
          {/* {[...arr].map((value, index) => { */}
          {productData.map((value, index) => {
            const { id, pname, product, category, imgscr, price, visible } =
              value;
            let linkto = "/pdetails/" + id;
            return visible ? (
              <div className="cards" key={index}>
                <div className="p-image">
                  <NavLink to={linkto}>
                    <img src={imgscr} alt="" className="image" />
                  </NavLink>
                </div>
                <div className="card-info">
                  <div className="card-category">{pname}</div>
                  <p className="card-title">{product}</p>
                  <p className="card-price">{price}</p>
                  <div className="w-wrapper">
                    <button
                      className="wishlist"
                      onClick={() => {
                        dispatch(addToWishlist(value));
                      }}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
