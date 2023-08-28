import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    function handleOnClick() {}
    return (
        <>
            <div className="productCard">
                <div className="productCard__img" onClick={handleOnClick}>
                    <Link to={`/productList/${product.id}`}>
                        <img src={product?.image} alt="productImg" />
                    </Link>
                </div>

                <div className="productCard__detail">
                    <h3 className="productCard__detail--title">
                        {product?.title}
                    </h3>
                    <p className="productCard__detail--price">
                        $ {product?.price}
                    </p>
                    <p className="productCard__detail--description">
                        {product?.description}
                    </p>
                    <button>ADD TOO CART</button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
