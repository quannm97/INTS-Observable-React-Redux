import { createAction } from "@reduxjs/toolkit";
// fetch product
export const fetchProductsRequest = createAction('FETCH_PRODUCTS_REQUEST')
export const fetchProductsSuccess = createAction('FETCH_PRODUCTS_SUCCESS')
export const fetchProductsFailure = createAction('FETCH_PRODUCTS_FAILURE')

// CRUD product
export const addProductsRequest = createAction('ADD_PRODUCTS_REQUEST')
export const addProductsSuccess = createAction('ADD_PRODUCTS_SUCCESS')
export const addProductsFailure = createAction('ADD_PRODUCTS_FAILURE')