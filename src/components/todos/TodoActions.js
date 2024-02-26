import styles from './TodoActions'
import Button from '../ui/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodoActions({ resetTodos, deleteCompleted, completedTodosExist }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title='Delete Completed Todos'
        onClick={deleteCompleted}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions
