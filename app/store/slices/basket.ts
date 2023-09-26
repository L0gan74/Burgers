import { Basket, BasketSliceState, Items } from "@/app/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BasketSliceState = {
  items: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // addItems(state, action) {
    //   //@ts-ignore
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    addItems(state, action) {
      //@ts-ignore
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItems(state, action) {
      //@ts-ignore
      state.items.filter((obj) => obj.id == action.payload);
    },
  },
});

export const { addItems, removeItems } = basketSlice.actions;

export default basketSlice.reducer;
