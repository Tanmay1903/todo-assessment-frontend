# Todo App Frontend

A modern Todo application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Create, edit, and delete tasks
- Mark tasks as complete/incomplete
- Color-code tasks
- Responsive design
- Real-time task counter
- Clean and modern UI

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- The backend server running (see [Todo Backend Repository](https://github.com/Tanmay1903/todo-assessment-backend.git))

## Installation

1. Clone the repository: 
```bash
git clone https://github.com/Tanmay1903/todo-assessment-frontend.git
cd todo-assessment-frontend
```

2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file in the root directory and add:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks
- REST API integration

## Project Structure

src/

├── app/                   # App router pages

├── components/            # Reusable components

├── lib/                   # Utilities and API client

└── types/                # TypeScript definitions
