import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store} from 'redux';
import composeWithDevTools from 'redux';
import {configureStore} from  "@reduxjs/toolkit"
import productReducer from "./reducers/Products"
import cartReducer from "./reducers/Cart"
import billing from './reducers/billing';
import profile from './reducers/profils';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        profile
    },
    devTools: true
})