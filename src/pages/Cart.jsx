import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCartItems } from "../features/cart/cartSlice"
import { Link } from "react-router-dom"

const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    return (
        <main className="container py-5">
            <h1 className="display-3 text-center">My Cart</h1>
            <p className="fs-3 text-center">You have {cart?.length} items in your cart</p>
            {
                cart.length === 0 ? (
                    <div className="text-center">
                        <Link to="/products" className="btn btn-primary">Browse Products</Link>
                    </div>
                ) : (
                    <></>
                )
            }
        </main>
    )
}

export default Cart