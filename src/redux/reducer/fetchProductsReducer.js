import { createReducer } from "@reduxjs/toolkit"
import {  fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "../action/product.action";

const initialState = {
    products: [],
    loading: false,
    fetched: false,
    error: false
}
const fetchProductsReducer = createReducer(initialState, 
    {
        [fetchProductsRequest]: (state) => ({
            ...state,
            loading: true,
            fetched: false,
            error: false
        }),
        [fetchProductsSuccess]: (state, action)  => ({
            ...state,
            loading: false,
            fetched: true,
            error: false,
            products: action.payload
        }),
        [fetchProductsFailure]: (state, action) =>({
            ...state,
            loading:false,
            fetched:false,
            error: action.payload
        }),


    }
)

export default fetchProductsReducer;