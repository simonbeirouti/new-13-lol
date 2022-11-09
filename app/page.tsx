import { Suspense } from "react";
import ToDosList from "./(user)/todos/ToDosList";

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading the todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
            <ToDosList />
        </div>
      </Suspense>
      
      <Suspense fallback={<p>Loading the shopping trolley...</p>}>
        <h1>Loading shopping trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
            <ToDosList />
        </div>
      </Suspense>
    </>
  )
}