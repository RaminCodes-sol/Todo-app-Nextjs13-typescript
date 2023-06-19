import Todo from "./Todo"


/*--------Get-Todos--------*/
const getTodos = async () => {
    const response = await fetch('http://localhost:4000/todos', { cache: 'no-store' })
    return response.json()
}


/*--------Todos-List--------*/
const TodoList = async () => {
  const todosData:Promise<Todo[]> = getTodos()
  const todos = await todosData


  return (
    <div className="mt-5">
        {
            todos?.map(todo => (
                <ul key={todo.id} className="text-left mb-2">
                    <Todo todo={todo} />
                </ul>
            ))
        }
    </div>
  )
}

export default TodoList