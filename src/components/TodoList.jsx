import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="max-h-48 overflow-y-auto scrollbar-thin">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-[#44446B] border border-[#4D4D70] text-white flex items-center justify-between mb-2 p-2 rounded"
        >
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`ml-2 ${
              todo.completed ? "text-[#D7F9D1]" : "text-white"
            }`}
          >
            {todo.completed ? <FaCheckCircle /> : <FaCircle />}
          </button>

          <p
            className={`${todo.completed ? "line-through text-gray-300" : ""}`}
          >
            {todo.text}
          </p>
          {todo.completed ? (
            <button
              className="bg-red-500 p-1 text-lg rounded-sm text-white"
              onClick={() => deleteTodo(todo.id)}
            >
              <RiDeleteBin5Line />
            </button>
          ) : (
            <span>{todo.dueDate}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
