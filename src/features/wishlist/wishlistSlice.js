import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
    const response = await axios.get('https://attire-avenue-backend.vercel.app/wishlist')
    return response.data
})

export const addWishlistProduct = createAsyncThunk("wishlist/addWishlistProduct", async (productId) => {
    const response = await axios.post('https://attire-avenue-backend.vercel.app/wishlist', {product: productId})
    return response.data
})

export const removeWishlistProduct = createAsyncThunk("wishlist/removeWishlistProduct", async (productId) => {
    const response = await axios.delete(`https://attire-avenue-backend.vercel.app/products/${productId}`)
    return response.data
})

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
        status: "idle",
        error: null
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((wishlistItem) => wishlistItem._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWishlist.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchWishlist.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist = action.payload
        })
        builder.addCase(fetchWishlist.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(addWishlistProduct.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addWishlistProduct.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist.push(action.payload.wishlistProduct)
        })
        builder.addCase(addWishlistProduct.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(removeWishlistProduct.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(removeWishlistProduct.fulfilled, (state, action) => {
            state.status = "success"
            state.wishlist = state.wishlist.filter((wishlistItem) => wishlistItem._id !== action.payload.wishlistProduct._id)
        })
        builder.addCase(removeWishlistProduct.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer