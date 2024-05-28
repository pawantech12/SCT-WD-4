import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
const AddItem = ({ addTodo, todos }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    const taskExists = todos.some(
      (todo) => todo.text.toLowerCase() === text.toLowerCase()
    );
    if (taskExists) {
      setError("Task already exists");
      return;
    }

    addTodo(text, dueDate ? dueDate.toLocaleDateString() : "Due today");
    setText("");
    setDueDate(null);
    setShowDatePicker(false);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Item"
        className="w-full h-11 outline-none py-2 px-4 mb-2 rounded bg-[#282851] text-white"
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="relative mb-2">
        <button
          type="button"
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="p-2 bg-[#545C89] text-white rounded flex items-center justify-center w-full"
        >
          <FaCalendarAlt />
          <span className="ml-2">
            {dueDate ? dueDate.toLocaleDateString() : "Select due date"}
          </span>
        </button>
        {showDatePicker && (
          <div className="absolute mt-2 z-50">
            <DatePicker
              selected={dueDate}
              onChange={(date) => {
                setDueDate(date);
                setShowDatePicker(false);
              }}
              inline
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-[#3D79B1] text-white p-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
