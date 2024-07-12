// src/redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } =
  taskSlice.actions;
export default taskSlice.reducer;
