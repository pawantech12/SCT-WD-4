import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <div className="max-h-48 overflow-y-auto scrollbar-thin">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between mb-2 p-2 border rounded"
        >
          <span>{todo.text}</span>
          <span>{todo.dueDate}</span>
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`ml-2 ${
              todo.completed ? "text-green-500" : "text-gray-500"
            }`}
          >
            {todo.completed ? <FaCheckCircle /> : <FaRegCircle />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
