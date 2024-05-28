import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import Tabs from "./components/Tabs";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, dueDate) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text, dueDate, completed: false },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#44446B] flex items-center justify-center">
      <div className="bg-[#31315B] shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl text-slate-400 font-bold mb-4">To Do App</h1>
        <AddItem addTodo={addTodo} todos={todos} />
        <Tabs>
          <div label="To Do">
            {todos.filter((todo) => !todo.completed).length > 0 ? (
              <TodoList
                todos={todos.filter((todo) => !todo.completed)}
                toggleComplete={toggleComplete}
              />
            ) : (
              <p className="text-center text-slate-200">There are no ToDos</p>
            )}
          </div>
          <div label="Completed">
            {todos.filter((todo) => todo.completed).length > 0 ? (
              <TodoList
                todos={todos.filter((todo) => todo.completed)}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ) : (
              <p className="text-center text-slate-200">No Completed To Dos</p>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
