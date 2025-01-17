const ProductCard = ({ product }) => {
    return (
        <div className="card h-100 rounded-0">
            <div className="position-relative">
                <div className="position-absolute top-0 end-0 m-2 bg-white rounded-circle d-flex justify-content-center align-items-center shadow-lg" style={{ width: "40px", height: "40px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </div>
                <img src={product.images[0]} alt={product.name} className="card-img-top img-fluid rounded-0" style={{height: "400px", objectFit: "cover"}} />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <button className="btn btn-secondary btn-sm text-uppercase">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard