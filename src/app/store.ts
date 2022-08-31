import { configureStore} from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import counterReducer from "../features/weather/weatherSlice";
enableMapSet();
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
