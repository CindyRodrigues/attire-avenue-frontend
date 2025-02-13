import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((wishlistItem) => wishlistItem._id !== action.payload)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer