import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware())
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
