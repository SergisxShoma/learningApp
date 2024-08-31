import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../types/toDo";

interface TodoListState {
    toDoList:Array<ToDo>
}

const initialState:TodoListState = {
    toDoList:[]
}
const toDoListSlice = createSlice({
    name:'toDoList',
    initialState,
    reducers: {
        addTodo: (state, {payload}:PayloadAction<ToDo>) => {
           state.toDoList = [...state.toDoList, payload]
        }
    }

})

export const toDoListActions =  toDoListSlice.actions
export default toDoListSlice.reducer