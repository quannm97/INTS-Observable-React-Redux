import { createReducer } from "@reduxjs/toolkit";
import { addProductsFailure, addProductsRequest, addProductsSuccess, fetchProductDetailFailure, fetchProductDetailRequest, fetchProductDetailSuccess } from "../action/product.action";

const initialState = {
    data: {
        createdAt: null,
        category: null,
        price: null,
        description: null,
        name: null,
        uuid: null,
        image: null,
    },
    error: false,
    loading: false,
    fetched: false,
    id: null
};

const crudProductReducer = createReducer(initialState, {
    // add Product
    [addProductsRequest]: (state, action) => ({
        ...state,
        error: false,
        loading: true,
        fetched: false,
        data: action.payload
    }),
    [addProductsSuccess]: (state) => ({
        ...state,
        error: false,
        loading: false,
        fetched: true
    }),
    [addProductsFailure]: (state) => ({
        ...state,
        error: true,
        loading: false,
        fetched: false
    }),
    // get 1 single product
    [fetchProductDetailRequest]: (state, action) => ({
        ...state,
        error: false,
        loading: true,
        fetched: false,
        id: action.payload
    }),
    [fetchProductDetailSuccess]: (state, action) => ({
        ...state,
        error: false,
        loading: false,
        fetched: true,
        data: action.payload
    }),
    [fetchProductDetailFailure]: (state, action) => ({
        ...state,
        error: true,
        loading: false,
        fetched: false
    }),
});

export default crudProductReducer