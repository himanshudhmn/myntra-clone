import React, { useState } from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/Data.js";

const Filter = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const selectCategory = (category) => {
    if (categories.includes(category)) {
      let newBrand = categories.filter((brandItem) => category !== brandItem);
      setCategories(newBrand);
      dispatch(filter({ type: "category", value: newBrand }));
    } else {
      setCategories([...categories, category]);
      dispatch(filter({ type: "category", value: [...categories, category] }));
    }
  };
  const selectBrand = (brand) => {
    if (brands.includes(brand)) {
      let newBrand = brands.filter((brandItem) => brand !== brandItem);
      setBrands(newBrand);
      dispatch(filter({ type: "brand", value: newBrand }));
    } else {
      setBrands([...brands, brand]);
      dispatch(filter({ type: "brand", value: [...brands, brand] }));
    }
  };
  //   console.log(brands, categories);

  const dispatch = useDispatch();
  return (
    <div className="f-left">
      <div className="left-content">
        <div className="f-wrapper">
          <div className="container">
            <div className="label-space">
              <input
                type="radio"
                name="gender"
                onClick={() =>
                  dispatch(filter({ type: "filter", value: "men" }))
                }
              />
              <label>Men</label>
              <br />
              <input
                type="radio"
                name="gender"
                onClick={() =>
                  dispatch(filter({ type: "filter", value: "women" }))
                }
              />
              <label>Women</label>
            </div>
          </div>
        </div>

        <div className="f-wrapper">
          <div className="container">
            <h4>Categories</h4>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
                  selectCategory("shirt");
                }}
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectCategory("overshirt");
                }}
              />
              <label>Oversize Shirts</label>
            </div>
          </div>
        </div>

        <div className="f-wrapper">
          <div className="container">
            <h4>Brands</h4>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
                  selectBrand("zara");
                }}
              />
              <label>Zara</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectBrand("H&M");
                }}
              />
              <label>H&amp;M</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectBrand("us polo");
                }}
              />
              <label>US Polo</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  selectBrand("puma");
                }}
              />
              <label>Puma</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
