import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../Product/ProductCard";
import { useSelector } from "react-redux";
import "./HomePage.css";

const Homepage = (props) => {
  const [sortType, setSortType] = useState("");
  //   const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);
  const productData = useSelector((state) => state.datastore.value.data);
  useEffect(() => {
    const sortArray = (type) => {
      let pdata = [...productData];
      const sorted = [...pdata].sort((a, b) => {
        const aPrice = a.price[0] === "R" ? parseFloat(a.price.slice(4)) : 0;
        const bPrice = b.price[0] === "R" ? parseFloat(b.price.slice(4)) : 0;
        if (type == "l2h") return aPrice - bPrice;
        else if (type == "h2l") return bPrice - aPrice;
        else return pdata;
      });
      //   setFilter(true);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);
  return (
    <React.Fragment>
      <div className="h-wrapper">
        <h4>
          Home / <span>Shirts for Men &amp; Women</span>
        </h4>
        <div className="flex-box">
          <div className="str">FILTERS</div>
          <div className="sort">
            <select
              name="Sort"
              id="sorting"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="default">Sort by : Recommendation</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="home">
        <Filter />
        <ProductCard />
        {console.log("Sorted array : ", data)}
        {/* <ProductCard products={data} fil={filter} /> */}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
