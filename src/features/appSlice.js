import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChanneInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;

      // setChannelId: (state, action) => {
      //   state.app += action.payload;
    },
  },
});
export const { setChanneInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
// export const { setChannelId } = appSlice.actions;

// export const selectChannelId = (state) => state.app.channelId;
// export const selectChannelName = (state) => state.app.channelName;

// export default appSlice.reducer;
