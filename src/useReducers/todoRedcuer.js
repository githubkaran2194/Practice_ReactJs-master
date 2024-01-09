import { v4 as uuidv4 } from 'uuid';

export const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
  todos: [], 
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case 'HANDLE_SUBMIT':
      const newTodo = {
        id: uuidv4(),
        name: state.name,
        email: state.email,
        message: state.message,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        name: '',
        email: '',
        message: '',
      };

    case 'REMOVE_ITEM':
      const idToRemove = action.payload.item.id;
      const updatedTodos = state.todos.filter((item) => item.id !== idToRemove);
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
