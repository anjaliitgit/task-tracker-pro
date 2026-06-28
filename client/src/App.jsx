import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardStats from "./components/DashboardStats";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

import { getTasks } from "./services/taskService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
     const res = await getTasks();
      setTasks(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-8">

        <DashboardStats tasks={tasks} />

        <TaskForm fetchTasks={fetchTasks} />

        <SearchBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          fetchTasks={fetchTasks}
        />

      </div>
      <ToastContainer
      position="top-right"
      autoClose={3000}
    />
    </div>
  );
}

export default App;