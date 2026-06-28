import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api/tasks",
});

// Get All Tasks
export const getTasks = async () => {
  return await API.get("/");
};

// Create Task
export const createTask = async (task) => {
  return await API.post("/", task);
};

// Update Task
export const updateTask = async (id, task) => {
  return await API.put(`/${id}`, task);
};

// Delete Task
export const deleteTask = async (id) => {
  return await API.delete(`/${id}`);
};