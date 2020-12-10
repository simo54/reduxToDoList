import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  // using dispatch hooks to dispatch actions to reducer
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addTodo = () => {
    dispatch({
      type: "CREATE_TODO",
      payload: {
        name: data.name,
      },
    });
  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          name={"name"}
          placeholder={"Todo name..."}
        />
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
