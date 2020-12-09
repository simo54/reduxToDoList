import React from "react";
import { useDispatch } from "react-redux";

const Todo = (props) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <div>
      <p>Todo: {props.name}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
