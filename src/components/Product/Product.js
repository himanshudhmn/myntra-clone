import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import Images from "./Images";
import productData from "./ProductData.js";
import ProductDetails from "./ProductDetails";

const Product = (props) => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <div className="pds-wrapper">
        {productData.map((value) => {
          if (value.id == id) {
            return (
              <div key={value.id}>
                <h4>
                  Home / Shirts<span> / {value.product}</span>
                </h4>
                <div className="p-details">
                  <Images
                    key={value.id}
                    imgMain={value.imgscr}
                    img2={value.img2}
                    img3={value.img3}
                    img4={value.img4}
                  />
                  <ProductDetails
                    productDescription={value.description}
                    productType={value.product}
                    productName={value.pname}
                    productPrice={value.price}
                    size={value.size}
                    value={value}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default Product;
