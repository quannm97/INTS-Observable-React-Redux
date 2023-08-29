import React from "react";
import ProductList from "../components/ListProduct/ProductList";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const pagesData = [
    {
        title: 'Product List',
        element: <ProductList/>,
        path: 'productList'
    },
    {
        title: 'Product Detail',
        element: <ProductDetail/>,
        path: `productList/:id`
    }
]

export default pagesData;