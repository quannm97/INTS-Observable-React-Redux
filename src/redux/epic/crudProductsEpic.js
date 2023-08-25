import { ofType } from "redux-observable";
import { catchError, mergeMap, of, tap } from "rxjs";
import {
    addProductsFailure,
    addProductsRequest,
    addProductsSuccess,
} from "../action/product.action";
import { crudProductAPI } from "../../services/productCRUD.service";

const crudProductEpic = (action$) =>
    action$.pipe(
        ofType(addProductsRequest.type),
        mergeMap((action) => {
            return crudProductAPI(action)
            .pipe(
                tap((response) => {
                    console.log("🚀 ~ file: crudProductsEpic.js:17 ~ tap ~ response:", response)
                }),
                mergeMap(() => {
                    return of(addProductsSuccess()); 
                }),
                catchError((error) => {
                    return of(addProductsFailure(error.message));
                })
            );
        })
    );

export default crudProductEpic;
