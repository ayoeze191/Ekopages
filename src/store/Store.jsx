import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store} from 'redux';
import composeWithDevTools from 'redux';
import {configureStore} from  "@reduxjs/toolkit"
import productReducer from "./reducers/Products"
export const store = configureStore({
    reducer: {
        products: productReducer
    },
    devTools: true
})