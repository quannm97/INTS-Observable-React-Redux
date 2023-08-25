import { createReducer } from "@reduxjs/toolkit";
import { addProductsFailure, addProductsRequest, addProductsSuccess } from "../action/product.action";

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
};

const crudProductReducer = createReducer(initialState, {
    [addProductsRequest]: (state, action) => ({
        ...state,
        error: false,
        loading: true,
        data: action.payload
    }),
    [addProductsSuccess]: (state) => ({
        ...state,
        error: false,
        loading: false,
    }),
    [addProductsFailure]: (state) => ({
        ...state,
        error: true,
        loading: false,
    })
});

export default crudProductReducer