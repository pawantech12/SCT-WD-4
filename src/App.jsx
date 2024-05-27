import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import Tabs from "./components/Tabs";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Pick up mail", dueDate: "Due today", completed: false },
    { id: 2, text: "Buy cat food", dueDate: "4/17/18", completed: false },
    {
      id: 3,
      text: "Get gift for grandma",
      dueDate: "Due today",
      completed: false,
    },
    {
      id: 4,
      text: "Doctors appointment",
      dueDate: "5/03/18",
      completed: false,
    },
  ]);

  const addTodo = (text, dueDate) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text, dueDate, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">CHORES</h1>
        <AddItem addTodo={addTodo} todos={todos} />
        <Tabs>
          <div label="To Do">
            {todos.filter((todo) => !todo.completed).length > 0 ? (
              <TodoList
                todos={todos.filter((todo) => !todo.completed)}
                toggleComplete={toggleComplete}
              />
            ) : (
              <p>There are no ToDos</p>
            )}
          </div>
          <div label="Completed">
            {todos.filter((todo) => todo.completed).length > 0 ? (
              <TodoList
                todos={todos.filter((todo) => todo.completed)}
                toggleComplete={toggleComplete}
              />
            ) : (
              <p>No Completed To Dos</p>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
