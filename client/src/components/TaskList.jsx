import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks }) {
  return (
    <div className="mt-8">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold text-gray-800">
          Your Tasks
        </h2>

        <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
          {tasks.length} Task{tasks.length !== 1 ? "s" : ""}
        </span>

      </div>

      {tasks.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">

          <div className="text-6xl mb-3">
            📋
          </div>

          <h3 className="text-2xl font-bold text-gray-700">
            No Tasks Found
          </h3>

          <p className="text-gray-500 mt-2">
            Add your first task to get started.
          </p>

        </div>
      ) : (
        <div className="grid gap-6">

          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              fetchTasks={fetchTasks}
            />
          ))}

        </div>
      )}
    </div>
  );
}

export default TaskList;