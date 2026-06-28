import { useState } from "react";
import { createTask } from "../services/taskService";
import { toast } from "react-toastify";

function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!task.description.trim()) {
       toast.error("Description is required");
      return;
    }

    try {
      setLoading(true);

       toast.success("Task Added Successfully!");

      await createTask(task);

      setTask({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
       toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Add New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Title */}

        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Task Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Description */}

        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            placeholder="Enter task description..."
            value={task.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Priority + Due Date */}

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        </div>

        {/* Button */}

        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 disabled:bg-gray-400"
        >
          {loading ? "Adding Task..." : "+ Add Task"}
        </button>

      </form>

    </div>
  );
}

export default TaskForm;