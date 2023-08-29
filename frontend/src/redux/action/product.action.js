import { createAction } from "@reduxjs/toolkit";
// fetch products
export const fetchProductsRequest = createAction('FETCH_PRODUCTS_REQUEST')
export const fetchProductsSuccess = createAction('FETCH_PRODUCTS_SUCCESS')
export const fetchProductsFailure = createAction('FETCH_PRODUCTS_FAILURE')

// CRUD product
export const addProductsRequest = createAction('ADD_PRODUCTS_REQUEST')
export const addProductsSuccess = createAction('ADD_PRODUCTS_SUCCESS')
export const addProductsFailure = createAction('ADD_PRODUCTS_FAILURE')

export const fetchProductDetailRequest = createAction('FETCH_PRODUCT_DETAIL_REQUEST')
export const fetchProductDetailSuccess = createAction('FETCH_PRODUCT_DETAIL_SUCCESS')
export const fetchProductDetailFailure = createAction('FETCH_PRODUCT_DETAIL_FAILURE')