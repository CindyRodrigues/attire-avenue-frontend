import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { fetchProducts } from "../features/products/productsSlice"
import ProductCard from "../components/ProductCard"
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice"
import { addItemToCart } from "../features/cart/cartSlice"

const ProductDetail = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { products, status, error } = useSelector((state) => state.products)
    const { wishlist } = useSelector((state) => state.wishlist)
    const { cart } = useSelector((state) => state.cart)

    const currentProduct = products?.find((product) => product._id === productId)

    const similarProducts = products?.filter((product) => product.category === currentProduct.category && product._id !== currentProduct._id)

    const [isWishlisted, setIsWishlisted] = useState(
        wishlist.findIndex((wishlistItem) => wishlistItem._id === currentProduct._id) === -1 ? false : true
    )
    const [inCart, setInCart] = useState(
        cart.findIndex((cartItem) => cartItem.productId === currentProduct._id) === -1 ? false : true
    )

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [productId])

    const handleWishlist = () => {
        if(isWishlisted) {
            dispatch(removeFromWishlist(currentProduct._id))
            setIsWishlisted(false)
        } else {
            dispatch(addToWishlist(currentProduct._id))
            setIsWishlisted(true)
        }
    }

    const handleCart = () => {
        dispatch(addItemToCart({productId: currentProduct._id}))
        setInCart(true)
    }

    return (
        <main className="container py-5">
            {error && <p>Error: {error}</p>}
            {status === "loading" && <p>Loading...</p>}
            {status === "success" && <>
                <div className="row">
                    <div className="col-md-4">
                        <img src={currentProduct.images[0]} alt={currentProduct.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4">{currentProduct.name}</h1>
                        <p className="fs-5">
                            <span className="me-3">{currentProduct.rating}</span>
                            <i className={`bi ${currentProduct.rating >= 1 ? "bi-star-fill" : currentProduct.rating >= 0.5 ? "bi-star-half" : "bi-star"}`}></i>
                            <i className={`bi ${currentProduct.rating >= 2 ? "bi-star-fill" : currentProduct.rating >= 1.5 ? "bi-star-half" : "bi-star"}`}></i>
                            <i className={`bi ${currentProduct.rating >= 3 ? "bi-star-fill" : currentProduct.rating >= 2.5 ? "bi-star-half" : "bi-star"}`}></i>
                            <i className={`bi ${currentProduct.rating >= 4 ? "bi-star-fill" : currentProduct.rating >= 3.5 ? "bi-star-half" : "bi-star"}`}></i>
                            <i className={`bi ${currentProduct.rating === 5 ? "bi-star-fill" : currentProduct.rating >= 4.5 ? "bi-star-half" : "bi-star"}`}></i>
                        </p>
                        <p className="mb-4">
                            <span className="fs-4 fw-bold me-3">₹{(currentProduct.price - (currentProduct.price * currentProduct.discount / 100)).toFixed(2)}</span>
                            <span className="fs-5 text-decoration-line-through text-body-tertiary me-3">₹{currentProduct.price.toFixed(2)}</span>
                            <span className="fs-5 fw-bold text-body-tertiary">{currentProduct.discount}% off</span>
                        </p>
                        {
                            inCart ? (
                                <Link to="/cart" className="btn btn-secondary me-5 mb-4 rounded-0 text-decoration-none">
                                    <i className="bi bi-cart me-2"></i>
                                    Go To Cart
                                </Link>
                            ) : (
                                <button className="btn btn-secondary me-5 mb-4 rounded-0" onClick={handleCart}>
                                    <i className="bi bi-cart me-2"></i>
                                    Add To Cart
                                </button>
                            )
                        }
                        <button className="btn btn-secondary mb-4 rounded-0" onClick={handleWishlist}>
                            <i className="bi bi-heart me-2"></i>
                            {isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
                        </button>
                        <hr />
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <i className="bi bi-boxes fs-1"></i>
                                <p className="fs-6">Easy Returns</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="bi bi-cash-stack fs-1"></i>
                                <p className="fs-6">Pay On Delivery</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="bi bi-truck fs-1"></i>
                                <p className="fs-6">Free Delivery</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="bi bi-credit-card fs-1"></i>
                                <p className="fs-6">Secure Payment</p>
                            </div>
                        </div>
                        <hr />
                        <p className="fs-3">Description</p>
                        <p className="fs-6">{currentProduct.description}</p>
                    </div>
                </div>
                <hr />
                <p className="fs-3">Similar Products</p>
                <div className="row">
                    {
                        similarProducts.map((product) => (
                            <div className="col-md-3">
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                </div>
            </>
            }
        </main>
    )
}

export default ProductDetail