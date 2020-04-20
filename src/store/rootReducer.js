import { combineReducers } from "redux";
import globalReducer from "./globalState";


const rootReducer = combineReducers({
	main: globalReducer,
	
});

export default rootReducer;
