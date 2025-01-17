import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get('https://attire-avenue-backend.vercel.app/products')
    return response.data
})

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success"
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer