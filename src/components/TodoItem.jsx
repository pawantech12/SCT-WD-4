import React from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded ${
        todo.completed ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-2"
        />
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      </div>
      <span className="text-sm text-gray-600">{todo.dueDate}</span>
    </div>
  );
};

export default TodoItem;
