import { useParams } from "react-router-dom"
import { selectCurrentProducts } from "../../store/products/products-selector";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import ProductDetail from "../../components/product-detail/product-detail";

const ProductDetailPage = () => {
    const { slugPara } = useParams();
    const currentProducts = useSelector(selectCurrentProducts);

    const [product, setproduct] = useState([]);

    useEffect(() => {
        currentProducts.map((product) => {
            if (product.id.toString() === slugPara) {
                return setproduct(product)
            }
            return null;
        })
    }, [])

    return (
        <>
            {
                product && <ProductDetail product={product} />
            }
        </>
    );
}

export default ProductDetailPage;
