import { combineEpics } from "redux-observable";
import fetchProductsEpic from "./fetchProductsEpic";
import crudProductEpic from "./crudProductsEpic";

const rootEpic = combineEpics(fetchProductsEpic, crudProductEpic)

export default rootEpic