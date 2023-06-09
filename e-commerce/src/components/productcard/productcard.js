import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { image, title, price, id } = product;

    const navigate = useNavigate();
    const changeRoute = () => navigate("/products/"+ id);
    return (
        <>
            <div className="card col-sm-4 m-3 border-0 w-25" onClick={changeRoute}>
                <img className="card-img-top rounded-5" src={image} width="200px" height="230px" alt="Card product" style={{objectFit: "contain"}}/>
                <div className="card-body p-2 d-flex flex-column align-items-center text-center">
                    <h5 className="card-title mt-2">
                        {title}
                    </h5>
                    <p className="card-text mt-2 mb-3">Price : ${price}</p>
                    <button className="btn btn-primary align-center">View details</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;