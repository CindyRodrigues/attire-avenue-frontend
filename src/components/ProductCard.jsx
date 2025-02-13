import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice"

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { wishlist } = useSelector((state) => state.wishlist)

    const [isWishlisted, setIsWishlisted] = useState(
        wishlist.findIndex((wishlistItem) => wishlistItem._id === product._id) === -1 ? false : true
    )

    const handleWishlist = () => {
        if(isWishlisted) {
            dispatch(removeFromWishlist(product._id))
            setIsWishlisted(false)
        } else {
            dispatch(addToWishlist(product))
            setIsWishlisted(true)
        }
    }

    return (
        <div className="card h-100 rounded-0">
            <Link to={`/products/${product._id}`} className="text-decoration-none link-dark">
                <img src={product.images[0]} alt={product.name} className="card-img-top img-fluid rounded-0" style={{height: "350px", objectFit: "cover"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text m-0">₹{product.price}</p>
                    <p className="card-text">
                        <span className="me-3">{product.rating}</span>
                        <i className={`bi ${product.rating >= 1 ? "bi-star-fill" : product.rating >= 0.5 ? "bi-star-half" : "bi-star"}`}></i>
                        <i className={`bi ${product.rating >= 2 ? "bi-star-fill" : product.rating >= 1.5 ? "bi-star-half" : "bi-star"}`}></i>
                        <i className={`bi ${product.rating >= 3 ? "bi-star-fill" : product.rating >= 2.5 ? "bi-star-half" : "bi-star"}`}></i>
                        <i className={`bi ${product.rating >= 4 ? "bi-star-fill" : product.rating >= 3.5 ? "bi-star-half" : "bi-star"}`}></i>
                        <i className={`bi ${product.rating === 5 ? "bi-star-fill" : product.rating >= 4.5 ? "bi-star-half" : "bi-star"}`}></i>
                    </p>
                </div>
            </Link>
            <div className="card-body d-flex justify-content-between">
                <button className="btn btn-secondary btn-sm rounded-0 me-1">
                    <i class="bi bi-cart me-2"></i>
                    Add to cart
                </button>
                <button className="btn btn-secondary btn-sm rounded-0 ms-1" onClick={handleWishlist}>
                    <i class="bi bi-heart me-2"></i>
                    {isWishlisted ? "Remove From Wishlist" : "Add To wishlist"}
                </button>
            </div>
        </div>
    )
}

export default ProductCard