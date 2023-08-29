import React, { useState } from "react";
import { addProductsRequest } from "../../../redux/action/product.action";
import { useDispatch } from "react-redux";
import "./AddProductForm.scss";

const AddProductForm = ({ setProductConfig }) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(addProductsRequest(state));
        setProductConfig((prev) => !prev);
    };
    return (
        <>
            <form className="productManage" onSubmit={handleOnSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleOnChange} />
                <label>Price</label>

                <input type="text" name="price" onChange={handleOnChange} />
                <label>Description</label>

                <input
                    type="text"
                    name="description"
                    onChange={handleOnChange}
                />
                <label>Category</label>

                <input type="text" name="category" onChange={handleOnChange} />
                <button type="submit">Click me!</button>
            </form>
        </>
    );
};

export default AddProductForm;
