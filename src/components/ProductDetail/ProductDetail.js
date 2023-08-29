import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetailRequest } from "../../redux/action/product.action";
import "./ProductDetail.scss";
import requestProducts from "../../api/requestProducts";
import EditProductForm from "../Form/ProductForm/EditProductForm";
const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productConfig, setProductConfig] = useState(false);


    let { data } = useSelector((state) => state.product);
    let product = data.data;

    const handleEdit = () => {
        setProductConfig((prev) => !prev);
    };

    const handleDelete = () => {
        requestProducts
            .delete(`/products/${id}`)
            .then(() => navigate(`/productList`))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        dispatch(fetchProductDetailRequest(id));
    }, [dispatch,id]);

    return (
        <>
            {
                productConfig && <EditProductForm setProductConfig={setProductConfig}/>
            }
            {product && (
                <div className="product">
                    <div className="product__image">
                        <img src={product.image} alt="Product" />
                    </div>
                    <div className="product__content">
                        <h2 className="product__title">{product.name}</h2>
                        <p className="product__description">
                            {product.description}
                        </p>
                        <p className="product__price">${product.price}</p>
                        <p className="product__category">{product.category}</p>
                    </div>
                    <div className="product__button">
                        <button
                            className="product__button--edit"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="product__button--delete"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
