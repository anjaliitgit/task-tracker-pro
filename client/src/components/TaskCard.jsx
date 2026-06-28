import { useState } from "react";
import { deleteTask, updateTask } from "../services/taskService";
import EditTaskModal from "./EditTaskModal";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks }) {
  const [openModal, setOpenModal] = useState(false);

  // Delete Task
  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(task._id);

      toast.success("Task deleted successfully!");

      fetchTasks();
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete task!");
    }
  };

  // Toggle Status
  const toggleStatus = async () => {
    try {
      await updateTask(task._id, {
        ...task,
        status:
          task.status === "Pending"
            ? "Completed"
            : "Pending",
      });

      toast.success(
        task.status === "Pending"
          ? "Task Completed!"
          : "Task Marked as Pending!"
      );

      fetchTasks();
    } catch (error) {
      console.log(error);

      toast.error("Unable to update task!");
    }
  };

  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">

        {/* Header */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {task.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {task.description}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>

        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col md:flex-row justify-between md:items-center gap-4">

          <div>

            <p className="text-sm text-gray-500">
              📅 Due Date:
              <span className="font-medium ml-2">
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "Not Set"}
              </span>
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                task.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {task.status}
            </span>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setOpenModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              ✏ Edit
            </button>

            <button
              onClick={toggleStatus}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              {task.status === "Pending"
                ? "✅ Complete"
                : "↩ Undo"}
            </button>

            <button
              onClick={deleteHandler}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              🗑 Delete
            </button>

          </div>

        </div>

      </div>

      <EditTaskModal
        task={task}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        fetchTasks={fetchTasks}
      />
    </>
  );
}

export default TaskCard;