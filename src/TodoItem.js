import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFunc } from "./modules/action";
const TodoItem = ({ id, title, content }) => {
  const dispatch = useDispatch();

  const deleteTodo = useCallback(() => {
    dispatch(actionFunc.deleteTodo(id));
  }, []);
  return (
    <div onClick={deleteTodo}>
      <div>제목 : {title}</div>
      <div>내용 : {content}</div>
    </div>
  );
};

export default TodoItem;
