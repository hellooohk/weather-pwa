import { createSlice } from "@reduxjs/toolkit";
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    value: [],
    recentSearches: new Set(),
    recentApiData: [],
  },
  reducers: {
    add: (state: any, action: any) => {
      state.value.push(action.payload);
    },
    remove: (state: any, action: any) => {
      const filterData = state.value.filter(
        (item: any) => item.city !== action.payload
      );
      state.value = filterData;
    },
    addSearch: (state: any, action: any) => {
      state.recentSearches.add(action.payload);
    },
  },
});

export const { add, remove, addSearch } = weatherSlice.actions;

export default weatherSlice.reducer;
