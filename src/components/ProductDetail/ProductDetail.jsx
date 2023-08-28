import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetailRequest } from "../../redux/action/product.action";
import "./ProductDetail.scss";

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let { data } = useSelector((state) => state.product);
    let product = data.data;
    useEffect(() => {
        dispatch(fetchProductDetailRequest(id));
    }, [dispatch]);

    if (product) {
        return (
            <>
                <div class="product">
                    <div class="product-image">
                        <img src={product.image} alt="Product Image" />
                    </div>
                    <div class="product-content">
                        <h2 class="product-title">{product.name}</h2>
                        <p class="product-description">{product.description}</p>
                        <p class="product-price">{product.price}</p>
                        <p class="product-category">{product.category}</p>
                    </div>
                </div>
            </>
        );
    }
};

export default ProductDetail;
