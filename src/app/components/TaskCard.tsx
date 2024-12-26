import { Task } from '../types/task';
import { useRouter } from 'next/navigation';
import { api } from '../lib/api';

interface TaskCardProps {
  task: Task;
  onUpdate: () => void;
}

export function TaskCard({ task, onUpdate }: TaskCardProps) {
  const router = useRouter();

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await api.updateTask(task.id, { completed: !task.completed });
    onUpdate();
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this task?')) {
      await api.deleteTask(task.id);
      onUpdate();
    }
  };

  return (
    <div 
      onClick={() => router.push(`/edit/${task.id}`)}
      className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors"
      style={{ borderLeft: `4px solid ${task.color}` }}
    >
      <button
        onClick={handleToggle}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${task.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-600'}`}
      >
        {task.completed && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span 
        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}
      >
        {task.title}
      </span>

      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}
