import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDos",
  initialState: [
    { title: "task1", description: "description 1", id: 1, status: false },
    { title: "task2", description: "description 2", id: 2, status: false },
    { title: "task3", description: "description 3", id: 3, status: false },
  ],
  reducers: {
    addItem: {
      reducer(state, action) {
        const newToDo = action.payload;
        newToDo.id = state.push(newToDo);
      },
      prepare(title, description) {
        return { payload: { title, description, status: "" } };
      },
    },
    deleteItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem, toggleItemStatus } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
