import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectOrder } from "../../store/order/order-selector";
import { useState } from "react";

const HeaderFooter = () => {

    const navigate = useNavigate();
    const orderItems = useSelector(selectOrder);

    const [search, setSearch] = useState("")

    const submitSearch = (e) => {
        setSearch(e)
        navigate(`/products?search=${e}`)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand m-3" href="/">E-commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse flex justify-content-around navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart <sup className="text-white bg-secondary rounded-pill px-1">{orderItems.length}</sup></a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0 d-flex">
                        <div className="p-2">Search:</div>
                        <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" name='search' value={search} onChange={(e)=> submitSearch(e.target.value)}/>
                    </div>
                </div>
            </nav>

            <Outlet />

            <div className="border-top">
                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="/products" className="nav-link px-2 text-muted">Products</a></li>
                        </ul>
                        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default HeaderFooter;