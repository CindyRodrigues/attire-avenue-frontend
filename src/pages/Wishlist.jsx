import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchWishlistItems } from "../features/wishlist/wishlistSlice"
import { useEffect } from "react"
import WishlistItem from '../components/WishlistItem'

const Wishlist = () => {
    const dispatch = useDispatch()
    const { wishlist } = useSelector((state) => state.wishlist)

    useEffect(() => {
        dispatch(fetchWishlistItems())
    }, [dispatch])

    return (
        <main className="container py-5">
            <h1 className="display-3 text-center">My Wishlist</h1>
            <p className="fs-3 text-center">You have {wishlist?.length} items in your wishlist</p>
            {
                wishlist.length === 0 ? (
                    <div className="text-center">
                        <Link to="/products" className="btn btn-primary">Browse Products</Link>
                    </div>
                ) : (
                    <div className="row">
                        {
                            wishlist && wishlist.length > 0 && wishlist.map((wishlistItem) => (
                                <div className="col-md-6">
                                    <WishlistItem productId={wishlistItem.productId} />
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </main>
    )
}

export default Wishlist