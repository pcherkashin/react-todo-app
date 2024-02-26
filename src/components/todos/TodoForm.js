import styles from './TodoForm.module.css'
import Button from '../ui/Button'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('') // Clear the input field after adding a task
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter a task to do...'
        />
        <Button type='submit' title='Add task'>
          Add task
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
