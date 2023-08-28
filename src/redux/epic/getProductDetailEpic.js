import { ofType } from "redux-observable";
import {
    fetchProductDetailFailure,
    fetchProductDetailRequest,
    fetchProductDetailSuccess,
} from "../action/product.action";
import { catchError, mergeMap, tap } from "rxjs";
import { getProductDetailAPI } from "../../services/productCRUD.service";

const getProductDetailEpic = (action$) => action$.pipe(
        ofType(fetchProductDetailRequest.type),
        mergeMap((action) => {
             return getProductDetailAPI(action.payload).pipe(
                tap((response) => console.log(response)),
                mergeMap((response) => {
                    return [fetchProductDetailSuccess(response)];
                }),
                catchError((error) => {
                    return [fetchProductDetailFailure(error)];
                })
            );
        })
    );
export default getProductDetailEpic;
