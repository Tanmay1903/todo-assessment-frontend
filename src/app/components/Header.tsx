import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-center py-8">
      <Link href="/" className="flex items-center gap-2 text-3xl font-bold">
        <span className="text-blue-400 text-5xl">
          <img src="/rocket.png" alt="Rocket" className="inline-block w-7 h-10 mr-3" />
          Todo
        </span>
        <span className="text-purple-400 text-5xl">App</span>
      </Link>
    </header>
  );
}
