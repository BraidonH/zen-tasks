import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  completedTasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action);
    },
    removeTask: (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks].filter(
          (task) => task.payload != action.payload
        ),
      };
    },
    completedTask: (state, action) => {
      state.completedTasks.push(action.payload);
    },
  },
});

export const { addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;
