import { createSlice } from "@reduxjs/toolkit";
import productData from "../components/Product/ProductData";

export const counterSlice = createSlice({
  name: "datastore",
  initialState: {
    value: { data: productData, wishlist: [], filterData: [] },
  },
  reducers: {
    filter: (state, action) => {
      const { payload } = action;
      switch (payload.type) {
        case "filter":
          const filters =
            state.value.filterData.length === 0
              ? state.value.data.map((currData) => {
                  if (action.payload.value === currData.filter) {
                    return { ...currData, visible: true };
                  } else {
                    return { ...currData, visible: false };
                  }
                })
              : state.value.filterData.filter(
                  (currData) => payload === currData.filter
                );
          state.value.data = filters;
          break;
        case "category":
          const categories =
            state.value.filterData.length === 0
              ? state.value.data.map((currData) => {
                  if (
                    action.payload.value.find(
                      (category) => category === currData.category
                    )
                  ) {
                    return { ...currData, visible: true };
                  } else {
                    return { ...currData, visible: false };
                  }
                })
              : state.value.filterData.filter(
                  (currData) => payload === currData.category
                );
          state.value.data = categories;
          break;
        case "brand":
          const brands =
            state.value.filterData.length === 0
              ? state.value.data.map((currData) => {
                  if (
                    action.payload.value.find(
                      (brand) => brand === currData.pname
                    )
                  ) {
                    return { ...currData, visible: true };
                  } else {
                    return { ...currData, visible: false };
                  }
                })
              : state.value.filterData.filter(
                  (currData) => payload === currData.pname
                );
          state.value.data = brands;
          break;

        default:
          break;
      }
    },
    addToWishlist: (state, action) => {
      // action.payload.id will be the product that should be added from state.value
      // state.wishlist = state.wishlist.push(action.payload)
      const abc = state.value.wishlist;
      console.log(abc);
      console.log([...abc, action.payload]);
      state.value.wishlist = [...abc, action.payload];
    },
    removeFromWishList: (state, action) => {
      const wishlistedData = state.value.wishlist.filter(
        ({ id }) => id !== action.payload.id
      );
      console.log(wishlistedData);
      state.value.wishlist = wishlistedData;
    },
  },
});

export const { filter, addToWishlist, removeFromWishList } =
  counterSlice.actions;

export default counterSlice.reducer;
