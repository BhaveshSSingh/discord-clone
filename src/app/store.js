import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";
import appReducer from "../features/appSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
