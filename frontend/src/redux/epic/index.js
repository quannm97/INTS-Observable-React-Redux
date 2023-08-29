import { combineEpics } from "redux-observable";
import fetchProductsEpic from "./fetchProductsEpic";
import addProductEpic from "./addProductEpic";
import getProductDetail from "./getProductDetailEpic";

const rootEpic = combineEpics(
    fetchProductsEpic,
    addProductEpic,
    getProductDetail
);

export default rootEpic;
