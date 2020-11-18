const ADD_TODO = "todolist/ADD_TODO";
const DELETE_TODO = "todolist/DELETE_TODO";

const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const actionType = {
  ADD_TODO,
  DELETE_TODO,
};

export const actionFunc = {
  addTodo,
  deleteTodo,
};
