import { useState } from "react"

const AddToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input" 
        placeholder="Asi que, ¿cuál es la tarea de hoy? 🤔" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit" className="todo-btn">Agregar</button>
    </form>
  )
}

export default AddToDoForm