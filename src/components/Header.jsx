import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg bg-secondary-subtle text-secondary-emphasis sticky-top py-3">
            <nav className="container d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand">AttireAvenue</NavLink>
                <div className="input-group" style={{ maxWidth: "300px"}}>
                    <span className="input-group-text">
                        <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link link-dark">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/wishlist" className="nav-link link-dark">
                                    <i className="bi bi-heart"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className=" nav-link link-dark">
                                    <i className="bi bi-cart"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header