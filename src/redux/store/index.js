import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favouritesReducer from '../reducers/favouritesReducer';
import searchReducer from '../reducers/searchReducers';
import discographyReducer from '../reducers/discographyReducer';
import playerReducer from '../reducers/playerReducer';

import { persistStore, persistReducer } from 'redux-persist';//i metodi di persist
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const mainReducer = combineReducers({
    favourite: favouritesReducer,
    search: searchReducer,
    discography: discographyReducer,
    player: playerReducer
});

const persistConfig = ({
    key: 'root',//da dove vogliamo cominciare a salvare informazioni
    storage,
    blacklist: ['search', 'discography', 'player'],
    // transforms: [encryptTransform({
    //     secretKey: process.env.REACT_APP_PERSIST_KEY//chiave contenuta in .env
    // })]
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistedStore = persistStore(store)

