import React from "react";
import { useDispatch } from "react-redux";

const Todo = (props) => {
  // using dispatch hooks to dispatch actions to reducer
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
      <p>
        Todo: <strong>{props.name}</strong>
      </p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
