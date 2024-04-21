import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalogSlice";

const persistConfig = {
    key: "catalog",
    storage,
    whitelist: ["favoritelist"],
};

export const store = configureStore({
    reducer: {
        catalog: persistReducer(persistConfig, catalogReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

