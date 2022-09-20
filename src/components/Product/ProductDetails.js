import React from "react";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/Data.js";
const ProductDetails = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="pd-wrapper">
        <h2 className="pd-name">{props.productName}</h2>
        <p className="pd-type">{props.productType}</p>
        <div className="pd-reviews">10 reviews</div>
        <hr />

        <h2 className="pd-price">{props.productPrice}/-</h2>
        <strong>inclusive of all taxes</strong>
        <p>{props.productDescription}</p>
        <div className="pd-size">
          <p>SELECT SIZES</p>
          <p className="size">SIZE CHART &gt;</p>
        </div>
        {props.size.map((value) => {
          return <p className="pd-variant">{value}</p>;
        })}
        <br />
        <br />
        <div className="pd-btn">
          <button className="btn btn-cart">Add to Cart</button>

          <button
            className="btn"
            onClick={() => {
              dispatch(addToWishlist(props.value));
            }}
          >
            Wishlist
          </button>
        </div>
        <hr />
        <div className="pd-delivery">
          <p className="delivery">DELIVERY OPTIONS</p>
          <div className="pincode">
            <input type="text" placeholder="Enter pincode..." className="pin" />
            <button className="check">Check</button>
          </div>
          <h6>
            Please enter PIN code to check delivery time &amp; Pay on Delivery
            Availability
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
