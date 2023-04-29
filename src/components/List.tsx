import { Trash } from '@phosphor-icons/react'
import { Checkbox } from './Checkbox'
import styles from './List.module.css'

interface Todo {
  id?: number
  text: string
  check?: boolean
}

interface ListProps {
  todo: Todo[]
  onDeleteTodo: (todo: number) => void
  onCheckTodo: (check: number) => void
}

export function List({ todo, onDeleteTodo, onCheckTodo }: ListProps) {
  function handleDeleteTodo(id: number) {
    onDeleteTodo(id)
  }

  function handleCheckTodo(id: number) {
    onCheckTodo(id)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {todo.map((todo) => {
          return (
            <li key={todo.id}>
              <div className={styles.list_item}>
                <div className={styles.mr_12}>
                  <Checkbox
                    checked={todo.check!}
                    onChange={() => handleCheckTodo(todo.id!)}
                  />
                </div>
                <div className={styles.text}>
                  <p className={todo.check ? styles.check : undefined}>
                    {todo.text}
                  </p>
                </div>
                <div className={styles.ml_12}>
                  <button
                    className={styles.btn}
                    onClick={() => handleDeleteTodo(todo.id!)}
                  >
                    <Trash size={18} weight="bold" />
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
