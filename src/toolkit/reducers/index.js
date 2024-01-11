import { combineReducers } from "redux";
import MainPage from "./MainPage";

const reducers = () =>
  combineReducers({
    mainPage: MainPage,
  });
export default reducers;
