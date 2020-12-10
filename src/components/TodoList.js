import React, { useState } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = () => {
  // Getting todos from store
  const todos = useSelector((state) => state.todos);
  const [add, setAdd] = useState(false);

  return (
    <div>
      <h2>My Todos for today</h2>
      <button onClick={() => setAdd(!add)}>Start!</button>
      {/* If add is set to true show AddTodo */}
      {add && <AddTodo />}
      {todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} name={todo.name} />;
      })}
    </div>
  );
};

export default TodoList;
