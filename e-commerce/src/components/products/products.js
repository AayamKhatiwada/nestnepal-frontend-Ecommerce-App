import { useEffect, useState } from "react";
import ProductCard from "../../components/productcard/productcard";
import { selectCurrentProducts } from "../../store/products/products-selector";
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const Products = () => {

    const [search, setSearch] = useState("")
    const currentProducts = useSelector(selectCurrentProducts);
    const location = useLocation();
    var condition = true

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        setSearch(decodeURIComponent(urlParams.get('search')))
    }, [location.search])

    return (
        <>
            <div className="d-flex flex-wrap mx-5 my-4 justify-content-around">
                {
                    (currentProducts ?? []).map((product) => {
                        if (product.title.toLowerCase().includes(search.toLowerCase()) || search === "null") {
                            condition = false
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        }
                    })
                }
                {
                    condition && (
                        <h1>There are no products</h1>
                    )
                }

            </div>
        </>
    );
}

export default Products;