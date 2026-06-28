import { useEffect, useState } from "react";
import { updateTask } from "../services/taskService";
import { toast } from "react-toastify";

function EditTaskModal({
  task,
  isOpen,
  onClose,
  fetchTasks,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "Medium",
        dueDate: task.dueDate
          ? task.dueDate.substring(0, 10)
          : "",
        status: task.status || "Pending",
      });
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.description.trim()) {
      toast.error("Description is required");
      return;
    }

    try {
      await updateTask(task._id, formData);

      toast.success("Task Updated Successfully!");

      fetchTasks();

      onClose();
    } catch (error) {
      console.log(error);

      toast.error("Unable to update task");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">

        {/* Header */}

        <div className="bg-blue-600 rounded-t-2xl px-6 py-4">

          <h2 className="text-white text-2xl font-bold">
            Edit Task
          </h2>

        </div>

        <form
          onSubmit={handleUpdate}
          className="p-6 space-y-5"
        >

          {/* Title */}

          <div>

            <label className="block font-semibold mb-2">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          {/* Description */}

          <div>

            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          {/* Priority */}

          <div>

            <label className="block font-semibold mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          {/* Due Date */}

          <div>

            <label className="block font-semibold mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

          {/* Status */}

          <div>

            <label className="block font-semibold mb-2">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update Task
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTaskModal;