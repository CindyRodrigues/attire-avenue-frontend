import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice";
import { wishlistSlice } from "../features/wishlist/wishlistSlice";

export default configureStore({
    reducer: {
        products: productsSlice.reducer,
        wishlist: wishlistSlice.reducer
    }
})