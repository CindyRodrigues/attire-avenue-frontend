import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (cartItem) => {
    const response = await axios.post('https://attire-avenue-backend.vercel.app/cart', cartItem)
    return response.data
})

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const response = await axios.get('https://attire-avenue-backend.vercel.app/cart')
    return response.data
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addItemToCart.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addItemToCart.fulfilled, (state, action) => {
            state.status = "success"
            state.cart.push(action.payload.cartItem)
        })
        builder.addCase(addItemToCart.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(fetchCartItems.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.status = "success"
            state.cart = action.payload
        })
        builder.addCase(fetchCartItems.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export default cartSlice.reducer