import { combineReducers, configureStore } from "@reduxjs/toolkit";

// API's
import { auth } from "./API/Auth"; 
import { category } from "./API/Category";
import { subcategory } from "./API/SubCategory"; 
// SLICES
import authSlice from "./Slices/Auth"; 
import categorySlice from "./Slices/Category";
import subcategorySlice from "./Slices/SubCategory"; 

const rootReducer = combineReducers({
  [auth.reducerPath]: auth.reducer,
  [category.reducerPath]: category.reducer,
  [subcategory.reducerPath]: subcategory.reducer,
  authSlice,
  categorySlice,
  subcategorySlice,
});

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      auth.middleware,

      category.middleware,
      subcategory.middleware
    ),
});
