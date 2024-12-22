import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo"
import AddToDoForm from "./AddToDoForm"

const ToDoWrapper = () => {

    interface Todo {
        id: string;
        task: string;
        completed: boolean;
        isEditing: boolean;
    }

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (task: string) => {
        setTodos([...todos, {id: uuidv4(), task, completed: false, isEditing: false}])
    }

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id: string, task: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: false} : todo))
    }

    const toggleEdit = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className="TodoWrapper">
            <AddToDoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo} 
                    toggleEdit={toggleEdit} 
                />
            ))}
        </div>
    )
}

export default ToDoWrapper