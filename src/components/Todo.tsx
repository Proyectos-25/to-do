import { BsPencilFill, BsTrashFill } from "react-icons/bs"
import { useState } from "react"

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo, toggleEdit }) => {
  const [newTask, setNewTask] = useState(todo.task)

  const handleEdit = (e) => {
    e.preventDefault()
    editTodo(todo.id, newTask)
  }

  return (
    <div className={`Todo ${todo.completed ? 'completed' : 'incompleted'}`}>
      {todo.isEditing ? (
        <form onSubmit={handleEdit} className="edit-form">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            className="todo-input"
          />
          <button type="submit" className="todo-btn">Guardar</button>
        </form>
      ) : (
        <>
          <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
          <div>
            <BsPencilFill className="edit-icon" onClick={() => toggleEdit(todo.id)} />
            <BsTrashFill className="delete-icon" onClick={() => deleteTodo(todo.id)} />
          </div>
        </>
      )}
    </div>
  )
}

export default Todo