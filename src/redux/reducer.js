import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allTodos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const toggleTodos = state.allTodos.map((item) =>
        typeof action.payload.completed === "boolean" &&
        item.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : item
      );
      return {
        ...state,
        allTodos: toggleTodos,
      };
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload.task,
        completed: false,
      };
      const addedTodos = [...state.allTodos, newTodo];
      return {
        ...state,
        allTodos: addedTodos,
      };
    case types.REMOVE_TODO:
      const filterTodo = state.allTodos.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        allTodos: filterTodo,
      };
    case types.UPDATE_TODO:
      const updatedTodos = state.allTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.task };
        }
        return todo;
      });
      return {
        ...state,
        allTodos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;
