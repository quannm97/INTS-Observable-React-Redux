import React, { useState } from "react";
import AddProductForm from "../Form/ProductForm/AddProductForm";

const Header = () => {
    const [productConfig, setProductConfig] = useState(false);
    function handleOnClick() {
        setProductConfig((prev) => !prev);
    }
    return (
        <>
            <button onClick={handleOnClick}>Add Product</button>
            {productConfig ? (
                <AddProductForm setProductConfig={setProductConfig} />
            ) : null}
        </>
    );
};

export default Header;
