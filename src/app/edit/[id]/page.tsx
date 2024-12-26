'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/Header';
import { ColorPicker } from '../../components/ColorPicker';
import { api } from '../../lib/api';
import { Task } from '../../types/task';

export default function EditTask({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  
  const { id } = use(params);

  useEffect(() => {
    const fetchTask = async () => {
      const tasks = await api.getTasks();
      const task = tasks.find(t => t.id === id);
      if (task) {
        setTask(task);
        setTitle(task.title);
        setColor(task.color);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    setError('');
    await api.updateTask(id, { title, color });
    router.push('/');
  };

  if (!task) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm text-blue-400">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError('');
              }}
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-blue-400">
              Color
            </label>
            <ColorPicker value={color} onChange={setColor} />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
}