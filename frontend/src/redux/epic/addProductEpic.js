import { ofType } from "redux-observable";
import { catchError, mergeMap, of, tap } from "rxjs";
import {
    addProductsFailure,
    addProductsRequest,
    addProductsSuccess,
    fetchProductsRequest,
} from "../action/product.action";
import { postProductAPI } from "../../services/productCRUD.service";

const addProductEpic = (action$) =>
    action$.pipe(
        ofType(addProductsRequest.type),
        mergeMap((action) => {
            return postProductAPI(action).pipe(
                tap((response) => {
                    console.log(
                        "🚀 ~ file: crudProductsEpic.js:17 ~ tap ~ response:",
                        response
                    );
                }),
                mergeMap(() => {
                    return [addProductsSuccess(), fetchProductsRequest()];
                }),
                catchError((error) => {
                    return of(addProductsFailure(error.message));
                })
            );
        })
    );

export default addProductEpic;
