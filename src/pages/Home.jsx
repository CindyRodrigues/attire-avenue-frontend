import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <main className="container">
                <div className="row py-5">
                    <div className="col-md-3 position-relative">
                        <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                            <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men" className="img-fluid" style={{ width: "100%", height: "auto"}} />
                            <div className="text-center fw-bold position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "white", width: "100%"}}>Men</div>
                        </Link>
                    </div>
                    <div className="col-md-3 position-relative" id="Women">
                        <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Women" className="img-fluid" style={{ width: "100%", height: "auto"}} />
                            <div className="text-center fw-bold position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "white", width: "100%"}}>Women</div>
                        </Link>
                    </div>
                    <div className="col-md-3 position-relative" id="Kids">
                        <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                            <img src="https://plus.unsplash.com/premium_photo-1675183689638-a68fe7048da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" alt="Kids" className="img-fluid" style={{ width: "100%", height: "auto"}} />
                            <div className="text-center fw-bold position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "white", width: "100%"}}>Kids</div>
                        </Link>
                    </div>
                    <div className="col-md-3 position-relative" id="Infants">
                        <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                            <img src="https://images.pexels.com/photos/4964280/pexels-photo-4964280.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Home" className="img-fluid" style={{ width: "100%", height: "auto"}} />
                            <div className="text-center fw-bold position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "white", width: "100%"}}>Infants</div>
                        </Link>
                    </div>
                </div>
                <div className="pb-5">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Attire Avenue Collection" className="img-fluid" style={{width: "100%", height: "auto"}} />
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <div className="card bg-body-tertiary p-3 h-100 border border-0 rounded-0">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src="https://images.unsplash.com/photo-1593290509101-6fdd66720977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bW1lciUyMGNsb3RoaW5nfGVufDB8fDB8fHww" alt="Summer Collection" className="img-fluid" style={{width: "150px", height: "200px"}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="text-uppercase pb-3">New Arrivals</h6>
                                        <h5 className="fw-bold pb-3">Summer Collection</h5>
                                        <p>Check out our best summer collection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-body-tertiary p-3 h-100 border border-0 rounded-0">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src="https://images.unsplash.com/photo-1548785688-81a84d6bb9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwY2xvdGhpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D" alt="Winter Collection" className="img-fluid" style={{width: "150px", height: "200px"}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="text-uppercase pb-3">New Arrivals</h6>
                                        <h5 className="fw-bold pb-3">Winter Collection</h5>
                                        <p>Check out our best winter collection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Home