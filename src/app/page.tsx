'use client';

import { useEffect, useState } from 'react';
import { Task } from './types/task';
import { api } from './lib/api';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  const fetchTasks = async () => {
    const data = await api.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4 pb-12">
        <button
          onClick={() => router.push('/create')}
          className="w-full py-3 mb-8 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Task
        </button>

        <div className="flex justify-between mb-6 text-sm">
          <span>Tasks: {tasks.length}</span>
          <span>Completed: {completedTasks} of {tasks.length}</span>
        </div>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <img 
                src="/empty-list.png" 
                alt="Empty task list" 
                className="mx-auto w-16 h-16 text-gray-500 mb-4"
              />
              <h3 className="text-xl mb-2">You don't have any tasks registered yet.</h3>
              <p className="text-gray-500">Create tasks and organize your to-do items.</p>
            </div>
          ) : (
            tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={fetchTasks}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}