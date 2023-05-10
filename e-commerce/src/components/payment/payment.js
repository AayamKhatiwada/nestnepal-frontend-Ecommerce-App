import { useNavigate } from 'react-router-dom'
import { clearOrder, clearTotal } from '../../store/order/order-action'
import { useDispatch } from 'react-redux';
import { SuccessNoty } from '../../notifications';

const Payment = ({ orderItems, total }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit_order = async () => {

        // Left to write code for submitting data in database

        dispatch(clearOrder());
        dispatch(clearTotal());
        SuccessNoty("Payment Successful")
        navigate('/');
    }

    return (
        <>
            <div className="container mt-5">
                <div className="container">
                    <h3 className="m-3">Cart</h3>
                    <div className="row my-3 mx-1 px-2">
                        <div className="col-5">Name:</div>
                        <div className="col-3">Quantity:</div>
                        <div className="col-2">Price:</div>
                        <div className="col-2">Total:</div>
                    </div>

                    {
                        orderItems.map((orderItem) => {
                            return (
                                <div className="row bg-primary rounded-3 my-3 mx-1 text-white px-2 py-2" key={orderItem.id}>
                                    <div className="col-5">{orderItem.title}</div>
                                    <div className="col-3">{orderItem.quantity}</div>
                                    <div className="col-2">${orderItem.price}</div>
                                    <div className="col-2">${(Math.round((orderItem.price * orderItem.quantity) * 100) / 100).toFixed(2)}</div>
                                </div>
                            );
                        })
                    }

                    <div className="row bg-danger rounded-3 my-3 mx-1 text-white px-2 py-2">
                        <div className="col-10">Total</div>
                        <div className="col-2">${(Math.round(total * 100) / 100).toFixed(2)}</div>
                    </div>
                    <button className="btn btn-primary mb-5" onClick={submit_order}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Payment;