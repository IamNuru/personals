import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from './redux/slices/authSlice';
import personalReducer from './redux/slices/personalSlice';

export const store = configureStore({
    composeWithDevTools,
    reducer: {
        auth: authReducer,
        personal: personalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
    //middleware: getDefaultMiddleware => getDefaultMiddleware().concat([authBaseApi.middleware, unauthBaseApi.middleware])
});

setupListeners(store.dispatch);