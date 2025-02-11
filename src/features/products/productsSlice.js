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
        error: null,
        filters: {
            category: ["All"],
            rating: 0,
            sortBy: "",
            price: 0
        }
    },
    reducers: {
        updateCategoryFilter: (state, action) => {
            const { value, checked } = action.payload
            if(value === "All") {
                if(checked) {
                    state.filters.category = ["All"]
                } else {
                    state.filters.category = []
                }
            } else {
                if(checked) {
                    state.filters.category = state.filters.category.filter((category) => category !== "All").concat(value)
                } else {
                    state.filters.category = state.filters.category.filter((category) => category !== value)
                }
            }
        },
        updateRatingFilter: (state, action) => {
            state.filters.rating = parseInt(action.payload)
        },
        clearFilters: (state, action) => {
            state.filters = action.payload
        }
    },
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

export const { updateCategoryFilter, updateRatingFilter, clearFilters } = productsSlice.actions

export default productsSlice.reducer