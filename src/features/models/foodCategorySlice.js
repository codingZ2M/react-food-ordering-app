import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foodCategories : ["Desserts", "Pizza", "Bakery", "Fast Food", "Brunch", "Burger", "Drink"],
}

const foodCategorySlice  = createSlice(   {   /* Redux State Slice */
    name: "model",
    initialState,
    reducers: {

                }

} )

export const foodCategories = (state) => state.model.foodCategories;

export default foodCategorySlice.reducer;
