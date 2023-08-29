import { ofType } from "redux-observable";
import { catchError, delay, map, mergeMap } from "rxjs";
import {
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
} from "../action/product.action";
import { fetchProductListAPI } from "../../services/productsFetch.service";

const fetchProductsEpic = (action$) => action$.pipe(
        ofType(fetchProductsRequest.type),
        mergeMap(() => {
            return fetchProductListAPI().pipe(
                delay(1500),
                map((data) => fetchProductsSuccess(data)),
                catchError((error) => fetchProductsFailure(error))
            );
        })
    );

export default fetchProductsEpic;
