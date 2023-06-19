'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";


/*--------Add-Todo-Function--------*/
const addTodoFunc = async (title: string, refresh: () => void) => {
  await fetch('http://localhost:4000/todos', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      isDone: false
    })
  })

  refresh()
}




const AddTodo = () => {
  const [title, setTitle] = useState('')
  const router = useRouter()
  

  /*-------Input-HandleChange-------*/
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }


  return (
    <div className='w-full flex mb-3 mt-8'>

      {/*----Input----*/}
      <input type='text' value={title} onChange={(e) => handleChange(e)} placeholder="todo..." className="w-full p-3 border-none outline-none text-black"/>

      {/*----Button----*/}
      <button 
        onClick={async () => {
          await addTodoFunc(title, router.refresh)
          setTitle('')
        }}
        className='bg-purple-600 p-3 text-white'>Add</button>

    </div>
  )
}

export default AddTodo