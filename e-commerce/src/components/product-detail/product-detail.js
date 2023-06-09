import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder, setTotal } from '../../store/order/order-action';
import { getTotal, selectOrder } from '../../store/order/order-selector';
import { useSelector } from "react-redux";
import { SuccessNoty } from '../../notifications';

const ProductDetail = ({ product }) => {

    const { title, catagory, price, image, description, rating } = product

    const [quantity, setQuantity] = useState(1);
    const quantityInput = (e) => {
        setQuantity(e.target.value);
    }

    const orderItems = useSelector(selectOrder);
    const total = useSelector(getTotal);
    const dispatch = useDispatch();
    const orderInput = () => {
        dispatch(setOrder(orderItems, { ...product, quantity: quantity }));
        dispatch(setTotal(total, { ...product, quantity: quantity }));
        SuccessNoty("Item is placed in cart")
        // console.log({'name': name, 'price': price, 'quantity': quantity});
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={image} width="100%" className="rounded-5" alt='random' /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mt-4 mb-3"> <span className="brand">{catagory}</span>
                            <h5 className="text-uppercase">{title}</h5>
                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">Price:
                                ${price}</span>
                            </div>
                            <div className="price d-flex flex-row align-items-center">
                                Rating: {rating?.rate}
                            </div>
                        </div>
                        <p className="about">{description}</p>
                        <button type="submit" className="btn btn-primary mr-2 px-3 me-5" onClick={orderInput}>Add to cart</button>
                        <span>Quantity: </span>
                        <input type="number" id="quantity" name="quantity" min="1" max={rating?.count} value={quantity} onChange={e => quantityInput(e)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;