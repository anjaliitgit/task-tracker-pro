function DashboardStats({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">

        <h2 className="text-gray-500 font-semibold">
          Total Tasks
        </h2>

        <p className="text-4xl font-bold text-blue-600 mt-3">
          {total}
        </p>

      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">

        <h2 className="text-gray-500 font-semibold">
          Pending
        </h2>

        <p className="text-4xl font-bold text-orange-500 mt-3">
          {pending}
        </p>

      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">

        <h2 className="text-gray-500 font-semibold">
          Completed
        </h2>

        <p className="text-4xl font-bold text-green-600 mt-3">
          {completed}
        </p>

      </div>

    </div>
  );
}

export default DashboardStats;