import {combineReducers} from "redux"
import { billReducer } from "./reducers"



 export const rootReducer = combineReducers({
    billReducer:billReducer

})