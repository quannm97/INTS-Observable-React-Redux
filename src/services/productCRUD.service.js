import { from } from "rxjs"
import { requestProducts } from "../api/requestProducts"

export const crudProductAPI = (productData) => {
    
    return from(requestProducts.post('/products', productData))
}