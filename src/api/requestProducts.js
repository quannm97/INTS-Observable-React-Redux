import axios from "axios";
import { FAKE_PRODUCT_URL } from "../constants/common";

const requestProducts = axios.create(
    {baseURL: FAKE_PRODUCT_URL}
)

export default requestProducts