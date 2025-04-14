import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import filterReducer from "./filterReducer";
import { dataReducer } from "./dataReducer";
import tabReduser from "./tabReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  tab: tabReduser,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.(
    applyMiddleware(...middleware)
  ) || applyMiddleware(...middleware)
);

export default store;
