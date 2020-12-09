import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    e.persist();
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
        <p>Name: </p>
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
