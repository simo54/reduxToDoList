import React, { useState } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [add, setAdd] = useState(false);

  return (
    <div>
      <h2>My Todos for today</h2>
      <button onClick={() => setAdd(!add)}>Add Todo</button>
      {add && <AddTodo />}
      {todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} name={todo.name} />;
      })}
    </div>
  );
};

export default TodoList;
