import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epic";
import fetchProductsReducer from "./reducer/fetchProductsReducer";
import crudProductReducer from "./reducer/crudProduct";
const epicMiddleware = createEpicMiddleware();

const reducer = {
    products: fetchProductsReducer,
    product: crudProductReducer
}



export default configureStore({
    reducer,
    middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
