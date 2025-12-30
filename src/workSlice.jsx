import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "work",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTask, removeTask } = workSlice.actions;
export default workSlice.reducer;
