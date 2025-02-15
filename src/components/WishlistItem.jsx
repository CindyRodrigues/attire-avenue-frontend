import { useEffect, useState } from "react"
import { fetchProducts } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { removeItemFromWishlist } from "../features/wishlist/wishlistSlice"
import { addItemToCart, fetchCartItems } from "../features/cart/cartSlice"
import { Link } from "react-router-dom"

const WishlistItem = ({ productId }) => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    const { cart } = useSelector((state) => state.cart)

    const wishlistItem = products?.find((product) => product._id === productId)

    const [inCart, setInCart] = useState(
        cart?.findIndex((cartItem) => cartItem.productId === productId) === -1 ? false : true
    )

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCartItems())
    }, [dispatch])

    const handleWishlist = () => {
        dispatch(removeItemFromWishlist(wishlistItem._id))
    }

    const handleCart = () => {
        dispatch(addItemToCart({productId: wishlistItem._id}))
        setInCart(true)
    }

    return (
        <div className="card rounded-0 mb-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={wishlistItem.images[0]} alt={wishlistItem.name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{wishlistItem.name}</h5>
                        <p className="card-text">
                            <span className="fw-bold me-2">₹{(wishlistItem.price - (wishlistItem.price * wishlistItem.discount / 100)).toFixed(2)}</span>
                            <span className="text-decoration-line-through text-body-tertiary me-2">₹{(wishlistItem.price).toFixed(2)}</span>
                            <span>{wishlistItem.discount}% off</span>
                        </p>
                        {
                            inCart ? (
                                <Link to="/cart" className="btn btn-secondary rounded-0 me-2 text-decoration-none">
                                    <i class="bi bi-cart me-2"></i>
                                    Go To Cart
                                </Link>
                            ) : (
                                <button className="btn btn-secondary rounded-0 me-2" onClick={handleCart}>
                                    <i class="bi bi-cart me-2"></i>
                                    Add to cart
                                </button>
                            )
                        }
                        <button className="btn btn-secondary rounded-0" onClick={handleWishlist}>
                            <i class="bi bi-heart me-2"></i>
                            Remove From Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem