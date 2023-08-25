import React, { useState } from "react";
import { addProductsRequest } from "../../redux/action/product.action";
import { useDispatch } from "react-redux";


const ProductForm = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: '',
        price: '',
        description: '',
        category: ''
    })

    const handleOnChange = (event) => {
        const {name, value} = event.target
        
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    


    const handleOnSubmit = (event) => {
        event.preventDefault(); 
        dispatch(addProductsRequest(state))
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='name' onChange={handleOnChange}/>
                <input type="text" name='price' onChange={handleOnChange}/>
                <input type="text" name='description' onChange={handleOnChange}/>
                <input type="text" name='category' onChange={handleOnChange}/>
                <button type='submit'>Click me!</button>
            </form>
        </>
    );
};

export default ProductForm;
