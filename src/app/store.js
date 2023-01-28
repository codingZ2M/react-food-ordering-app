import { configureStore } from '@reduxjs/toolkit';
import foodCategoryReducer from '../features/models/foodCategorySlice'
import  userReducer  from '../features/models/userSlice'

export const store = configureStore({
  reducer: {
    model: foodCategoryReducer,
    user: userReducer,
  },
});
