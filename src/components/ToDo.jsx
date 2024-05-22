import React, { useState } from "react";
import { format } from "date-fns";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("");
  const [activeTab, setActiveTab] = useState("pending");

  const addTask = () => {
    if (newTask.trim() && taskDateTime) {
      setTasks([
        ...tasks,
        { text: newTask, completed: false, dateTime: taskDateTime },
      ]);
      setNewTask("");
      setTaskDateTime("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditTaskIndex(index);
    setEditTaskText(tasks[index].text);
  };

  const saveTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editTaskText } : task
    );
    setTasks(updatedTasks);
    setEditTaskIndex(null);
    setEditTaskText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const formatTime = (time) => {
    return format(new Date(time), "PPpp");
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-6 w-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        To-Do List
      </h1>
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-l ${
            activeTab === "pending"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } hover:bg-blue-600 hover:text-white transition`}
        >
          Pending Tasks
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-4 py-2 rounded-r ${
            activeTab === "completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } hover:bg-blue-600 hover:text-white transition`}
        >
          Completed Tasks
        </button>
      </div>
      <div className="flex w-full mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="px-4 py-2 border rounded w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="datetime-local"
          value={taskDateTime}
          onChange={(e) => setTaskDateTime(e.target.value)}
          className="px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={addTask}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="w-full list-disc pl-5 space-y-4">
        {activeTab === "pending" &&
          pendingTasks.map((task, index) => (
            <li
              key={index}
              className="text-lg flex items-center p-4 border rounded shadow-sm hover:shadow-md transition"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className="mr-4 h-6 w-6 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              {editTaskIndex === index ? (
                <div className="flex w-full">
                  <input
                    type="text"
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                    className="px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                  <button
                    onClick={() => saveTask(index)}
                    className="ml-2 px-4 py-2 text-sm font-semibold bg-green-500 hover:bg-green-600 rounded text-white transition"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex w-full justify-between items-center">
                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-gray-400" : ""
                    } cursor-pointer`}
                    onClick={() => editTask(index)}
                  >
                    {task.text}{" "}
                    <span className="text-sm text-gray-500">
                      ({formatTime(task.dateTime)})
                    </span>
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editTask(index)}
                      className="px-4 py-2 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 rounded text-white transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="px-4 py-2 text-sm font-semibold bg-red-500 hover:bg-red-600 rounded text-white transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        {activeTab === "completed" &&
          completedTasks.map((task, index) => (
            <li
              key={index}
              className="text-lg flex items-center p-4 border rounded shadow-sm hover:shadow-md transition"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className="mr-4 h-6 w-6 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="flex-1 line-through text-gray-400">
                {task.text}{" "}
                <span className="text-sm text-gray-500">
                  ({formatTime(task.dateTime)})
                </span>
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="px-4 py-2 text-sm font-semibold bg-red-500 hover:bg-red-600 rounded text-white transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ToDo;
