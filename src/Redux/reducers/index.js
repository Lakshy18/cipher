import { combineReducers } from "redux";
import { reducer } from "./reducers";

// We are creating the root reducer function here.
const rootReducer = combineReducers({
    reducer,
});

export default rootReducer;