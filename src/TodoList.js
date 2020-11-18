import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionType, actionFunc } from "./modules/action";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  const add = useCallback(() => {
    dispatch(
      actionFunc.addTodo({
        title: prompt("제목 입력"),
        content: prompt("내용 입력"),
      })
    );
  }, []);
  return (
    <div>
      <button onClick={add}>입력</button>
      {todos.map(({ id, title, content }) => (
        <TodoItem title={title} id={id} content={content} />
      ))}
    </div>
  );
};

export default TodoList;
