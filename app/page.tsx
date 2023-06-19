import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='w-full max-w-[400px] mx-auto'>
        <AddTodo />
        <TodoList />
      </div>
    </main>
  )
}
