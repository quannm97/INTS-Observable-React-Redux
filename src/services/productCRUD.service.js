import { from } from "rxjs"
import { requestProducts } from "../api/requestProducts"

export const postProductAPI = (productData) => {
    console.log("🚀 ~ file: productCRUD.service.js:5 ~ crudProductAPI ~ productData:", productData)
    
    return from(requestProducts.post('/products', productData.payload))
}

export const getProductDetailAPI = (id) => {
    console.log("🚀 ~ file: productCRUD.service.js:11 ~ getProductDetailAPI ~ id:", id)
    
    return from(requestProducts.get(`/products/${id}`))
}