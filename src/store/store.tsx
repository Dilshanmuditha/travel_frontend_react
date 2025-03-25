import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

// Function to check if the "rememberMe" flag is set in localStorage
const getCheck = (): boolean => {
  try {
    return localStorage?.getItem("rememberMe") === "true";
  } catch (e) {
    console.error("Error accessing localStorage", e);
    return false; // Fallback if localStorage isn't available
  }
};

// Persist config for the user slice
const userPersistConfig = {
  key: "user",
  storage: getCheck() ? storage : sessionStorage,
  version: 1,
};

// Root reducer combining alert and user reducers
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

// Create the Redux store and configure middlewares
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore persist actions to avoid serializable warnings
      },
    }),
});

// Persistor to handle rehydration
const persistor = persistStore(store);

// TypeScript types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for using dispatch and selector with proper typing
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Store provider component with PersistGate and loading state
function StoreProvider(props: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
}

export default StoreProvider;
