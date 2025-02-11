import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'
import { clearFilters, fetchProducts, updateCategoryFilter, updatePriceRangeFilter, updateRatingFilter, updateSortByFilter } from '../features/products/productsSlice'
import { useLocation } from 'react-router-dom'

const ProductListing = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { products, status, error, filters } = useSelector((state) => state.products)
    const { category, rating, sortBy, priceRange } = filters

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(clearFilters({
            category: ["All"],
            rating: 0,
            sortBy: "",
            priceRange: 5000
        }))
        if(location.state) {
            dispatch(updateCategoryFilter({ value: location.state, checked: true}))
        }
    }, [dispatch, location.state])

    const handleCategoryFilter = (event) => {
        const { value, checked } = event.target
        dispatch(updateCategoryFilter({ value, checked }))
    }

    const handleRatingFilter = (event) => {
        dispatch(updateRatingFilter(event.target.value))
    }

    const handleSortByFilter = (event) => {
        dispatch(updateSortByFilter(event.target.value))
    }

    const handlePriceFilter = (event) => {
        dispatch(updatePriceRangeFilter(event.target.value))
    }

    const handleClearFilter = () => {
        dispatch(clearFilters({
            category: ["All"],
            rating: 0,
            sortBy: "",
            priceRange: 5000
        }))
    }

    const filteredProducts = products?.filter((product) => category.includes("All") || category.includes(product.category))
    .filter((product) => product.rating >= rating)
    .filter((product) => product.price <= priceRange)

    const sortedProducts = sortBy === "priceLowToHigh" ? filteredProducts.sort((productOne, productTwo) => productOne.price - productTwo.price) : sortBy === "priceHighToLow" ? filteredProducts.sort((productOne, productTwo) => productTwo.price - productOne.price) : filteredProducts

    return (
        <div>
            <main className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 bg-body-tertiary p-5'>
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                            <p className='fw-bold m-0'>Filters</p>
                            <button className='btn btn-link p-0' onClick={handleClearFilter}>Clear</button>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Price</p>
                            <input type="range" className='form-range' min="1000" max="5000" step="500" value={priceRange}
                            onChange={handlePriceFilter} />
                            <div className='d-flex justify-content-between'>
                                <span>1000</span>
                                <span>3000</span>
                                <span>5000</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Category</p>
                            <label htmlFor='allProducts'>
                                <input type="checkbox" id="allProducts" value="All"
                                checked={category.includes("All")}
                                onChange={handleCategoryFilter} /> All Products
                            </label>
                            <br />
                            <label htmlFor='men'>
                                <input type="checkbox" id="men" value="Men"
                                checked={category.includes("Men")}
                                onChange={handleCategoryFilter} /> Men
                            </label>
                            <br />
                            <label htmlFor='women'>
                                <input type="checkbox" id="women" value="Women"
                                checked={category.includes("Women")}
                                onChange={handleCategoryFilter} /> Women
                            </label>
                            <br />
                            <label htmlFor='kids'>
                                <input type="checkbox" id="kids" value="Kids"
                                checked={category.includes("Kids")}
                                onChange={handleCategoryFilter} /> Kids
                            </label>
                            <br />
                            <label htmlFor='infants'>
                                <input type='checkbox' id="infants" value="Infants"
                                checked={category.includes("Infants")}
                                onChange={handleCategoryFilter} /> Infants
                            </label>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Rating</p>
                            <label htmlFor='allRating'>
                                <input type="radio" id="allRating" name="rating" value={0}
                                checked={rating === 0}
                                onChange={handleRatingFilter} /> All Ratings
                            </label>
                            <br />
                            <label htmlFor='4AndAbove'>
                                <input type="radio" id="4AndAbove" name="rating" value={4}
                                checked={rating === 4}
                                onChange={handleRatingFilter} /> 4 stars & above
                            </label>
                            <br />
                            <label htmlFor='3AndAbove'>
                                <input type="radio" id="3AndAbove" name="rating" value={3}
                                checked={rating === 3}
                                onChange={handleRatingFilter} /> 3 stars & above
                            </label>
                            <br />
                            <label htmlFor='2AndAbove'>
                                <input type="radio" id="2AndAbove" name="rating" value={2}
                                checked={rating === 2}
                                onChange={handleRatingFilter} /> 2 stars & above
                            </label>
                            <br />
                            <label htmlFor='1AndAbove'>
                                <input type="radio" id="1AndAbove" name="rating" value={1}
                                checked={rating === 1}
                                onChange={handleRatingFilter} /> 1 stars & above
                            </label>
                        </div>
                        <div>
                            <p className='fw-bold'>Sort By</p>
                            <label htmlFor='priceLowToHigh'>
                                <input type='radio' id="priceLowToHigh" name="sortBy" value="priceLowToHigh"
                                checked={sortBy === "priceLowToHigh"}
                                onChange={handleSortByFilter} /> Price - Low to High
                            </label>
                            <br />
                            <label htmlFor='priceHighToLow'>
                                <input type='radio' id="priceHighToLow" name="sortBy" value="priceHighToLow"
                                checked={sortBy === "priceHighToLow"}
                                onChange={handleSortByFilter} /> Price - High to Low
                            </label>
                        </div>
                    </div>
                    <div className='col-md-9 p-5'>
                        {error && <p>Error: {error}</p>}
                        {status === "loading" && <p>Loading...</p>}
                        {status === "success" && <>
                            <div className='row mb-4'>
                                <p className='text-body-secondary'>Showing {sortedProducts.length} products</p>
                            </div>
                            <div className='row'>
                                {
                                    sortedProducts.length > 0 &&
                                    sortedProducts.map(product => (
                                        <div className='col-md-4 mb-4' key={product._id}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductListing