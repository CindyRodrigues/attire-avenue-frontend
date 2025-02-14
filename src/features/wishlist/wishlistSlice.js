import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlistItems = createAsyncThunk("wishlist/fetchWishlistItems", async () => {
    const response = await axios.get('https://attire-avenue-backend.vercel.app/wishlist')
    return response.data
})

export const addItemToWishlist = createAsyncThunk("wishlist/addItemToWishlist", async (wishlistItem) => {
    const response = await axios.post('https://attire-avenue-backend.vercel.app/wishlist', wishlistItem)
    return response.data
})

export const removeItemFromWishlist = createAsyncThunk("wishlist/removeItemFromWishlist", async (productId) => {
    const response = await axios.delete(`https://attire-avenue-backend.vercel.app/wishlist/${productId}`)
    return response.data
})

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWishlistItems.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchWishlistItems.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist = action.payload
        })
        builder.addCase(fetchWishlistItems.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(addItemToWishlist.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addItemToWishlist.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist.push(action.payload.wishlistItem)
        })
        builder.addCase(addItemToWishlist.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(removeItemFromWishlist.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(removeItemFromWishlist.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist = state.wishlist.filter((wishlistItem) => wishlistItem._id !== action.payload.wishlistItem._id)
        })
        builder.addCase(removeItemFromWishlist.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export default wishlistSlice.reducer