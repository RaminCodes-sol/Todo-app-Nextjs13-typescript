'use client';
import { useRouter } from 'next/navigation'


/*--------Update-Todo--------*/
const updateTodo = async (id: number, isDone: boolean, refresh: () => void) => {
  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ isDone })
  })
    
   refresh()
}


/*--------Delete-Todo--------*/
const deleteTodo = async (id: number, refresh: () => void) => {
  await fetch(`http://localhost:4000/todos/${id}`,{
    method: 'DELETE'
  })

  refresh()
}




const Todo = ({ todo }: { todo: Todo }) => {
  const { id, title, isDone } = todo 
  const router = useRouter()


  return (
    <li className='flex justify-between p-2'>
      <input type='checkbox' checked={isDone} onChange={(e) => updateTodo(id, e.target.checked, router.refresh)} className="p-1 w-[20px] h-[20px] cursor-pointer" />
      <span>{title}</span>
      <button onClick={() => deleteTodo(id, router.refresh)} className='bg-[tomato] p-1'>Delete</button>
    </li>
  )
}

export default Todo