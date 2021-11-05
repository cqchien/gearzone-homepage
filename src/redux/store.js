import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/message.reducer";
import userReducer from "./reducers/user.reducer";
const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
});

export default store;
