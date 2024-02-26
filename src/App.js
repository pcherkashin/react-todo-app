import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/todos/TodoList'
import TodoForm from './components/todos/TodoForm'
import './App.css'
import TodoActions from './components/todos/TodoActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompleted={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'tasks' : 'task'
          }`}
        </h2>
      )}
    </div>
  )
}

export default App
