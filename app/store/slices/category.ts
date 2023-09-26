import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategorySlice {
  categoryId: number;
}

const initialState: CategorySlice = {
  categoryId: 0,
};

export const categorySlice = createSlice({
  name: "categpry",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
