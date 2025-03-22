import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const isBrowser = typeof window != undefined;

export let store;

const getStore = initialState => {
  if (isBrowser && store) {
    return store
  }

  console.log(process.env.NODE_ENV != "production");

  const newStore = configureStore({
    reducer: reducers,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV != "production"
  });

  store = newStore;

  return newStore
}

export default getStore;
