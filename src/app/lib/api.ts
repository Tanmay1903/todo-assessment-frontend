import { CreateTaskDTO, Task, UpdateTaskDTO } from '../types/task';

const API_URL = 'http://localhost:3001';

export const api = {
  getTasks: async (): Promise<Task[]> => {
    const res = await fetch(`${API_URL}/tasks`);
    return res.json();
  },

  createTask: async (task: CreateTaskDTO): Promise<Task> => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return res.json();
  },

  updateTask: async (id: string, task: UpdateTaskDTO): Promise<Task> => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return res.json();
  },

  deleteTask: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};