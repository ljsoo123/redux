import { act } from "react-dom/test-utils";
import { actionType } from "./action";

const initialState = {
  id: 0,
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { title, content } = action.payload;
      return {
        id: state.id + 1,
        todos: state.todos.concat({ id: state.id, title, content }),
      };
    }
    case actionType.DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((now) => now.id !== id),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
