import React, { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";

const Header = () => {
    const [productConfig, setProductConfig] = useState(false)
    function handleOnClick() {
        setProductConfig(prev => !prev)
    } 
    return (
        <>
            <button onClick={handleOnClick}>Add Product</button>
            {productConfig? <ProductForm setProductConfig={setProductConfig}/>:null}
        </>
    );
};

export default Header;
