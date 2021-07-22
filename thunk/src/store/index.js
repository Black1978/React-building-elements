import { applyMiddleware, createStore } from "redux"
import { combineReducers } from "redux"
import { cashReducer } from "./cashReducer"
import {customersReduser} from './customersReducer'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReduser = combineReducers({
    cash: cashReducer,
    customers: customersReduser
})


export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))