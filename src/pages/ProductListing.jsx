import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'
import { fetchProducts } from '../features/products/productsSlice'

const ProductListing = () => {
    const dispatch = useDispatch()
    const { products, status, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <main className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 bg-body-tertiary p-5 sticky-top'>
                        <div className='d-flex justify-content-between mb-4'>
                            <p className='fw-bold'>Filters</p>
                            <button className='btn btn-link'>Clear</button>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Price</p>
                            <input type="range" className='form-range' min="200" max="8500" />
                            <div className='d-flex justify-content-between'>
                                <span>200</span>
                                <span>8500</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Category</p>
                            <label htmlFor='men'>
                                <input type="checkbox" id="men" /> Men
                            </label>
                            <br />
                            <label htmlFor='women'>
                                <input type="checkbox" id="women" /> Women
                            </label>
                            <br />
                            <label htmlFor='kids'>
                                <input type="checkbox" id="kids" /> Kids
                            </label>
                            <br />
                            <label htmlFor='infants'>
                                <input type='checkbox' id="infants" /> Infants
                            </label>
                        </div>
                        <div className='mb-4'>
                            <p className='fw-bold'>Rating</p>
                            <label htmlFor='4AndAbove'>
                                <input type="radio" id="4AndAbove" /> 4 stars & above
                            </label>
                            <br />
                            <label htmlFor='3AndAbove'>
                                <input type="radio" id="3AndAbove" /> 3 stars & above
                            </label>
                            <br />
                            <label htmlFor='2AndAbove'>
                                <input type="radio" id="2AndAbove" /> 2 stars & above
                            </label>
                            <br />
                            <label htmlFor='1AndAbove'>
                                <input type="radio" id="1AndAbove" /> 1 stars & above
                            </label>
                        </div>
                        <div>
                            <p className='fw-bold'>Sort By</p>
                            <label htmlFor='priceLowToHigh'>
                                <input type='radio' id="priceLowToHigh" /> Price - Low to High
                            </label>
                            <br />
                            <label htmlFor='priceHighToLow'>
                                <input type='radio' id="priceHighToLow" /> Price - High to Low
                            </label>
                        </div>
                    </div>
                    {error && <p>Error: {error}</p>}
                    {status === "loading" && <p>Loading...</p>}
                    <div className='col-md-9 p-5'>
                        <div className='row mb-4'>
                            <p className='text-body-secondary'>Showing {products.length} products</p>
                        </div>
                        <div className='row'>
                            {
                                status === "success" &&
                                products.length > 0 &&
                                products.map(product => (
                                    <div className='col-md-4 mb-4' key={product._id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductListing