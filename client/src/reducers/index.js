import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import allUserReduser from "./allUserReduser";

export default combineReducers({
  allUser: allUserReduser,
  auth: authReducer,
  errors: errorReducer
});
