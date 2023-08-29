import React, { useState } from "react";
import "./EditProductForm.scss";
import requestProducts from "../../../api/requestProducts";
import { useParams } from "react-router-dom";

const EditProductForm = ({ setProductConfig }) => {
    const { id } = useParams();

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
        requestProducts
            .put(`/products/${id}`, state)
            .then((response) => console.log(response))
            .catch(console.error());
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

export default EditProductForm;
