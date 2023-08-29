import { from } from "rxjs"
import  requestProducts  from "../api/requestProducts"


export const fetchProductListAPI = () => {
    return from(requestProducts.get('/products'))
}
