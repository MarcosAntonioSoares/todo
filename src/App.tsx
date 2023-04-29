import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { List } from './components/List'
import { Empty } from './components/Empty'
import styles from './App.module.css'
import './global.css'

interface Todo {
  id?: number
  text: string
  check?: boolean
}

const initialValue = {
  text: '',
}

export function App() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<Todo>(initialValue)

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()

    setTodo([newTodo, ...todo])
    setNewTodo(initialValue)
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    const todo = {
      id: Math.random(),
      text: event.target.value,
      check: false,
    }
    setNewTodo(todo)
  }

  function deleteTodo(todoToDelete: number) {
    const todoWithoutDeletedOne = todo.filter((todo) => {
      return todo.id !== todoToDelete
    })

    setTodo(todoWithoutDeletedOne)
  }

  function checkTodo(checkTodo: number) {
    const todoChecked = todo.findIndex((todo) => {
      return todo.id == checkTodo
    })
    const tempTodo = [...todo]
    tempTodo[todoChecked].check = !tempTodo[todoChecked].check

    setTodo(tempTodo)
  }

  const totalCheck = todo.reduce((acc, current) => {
    if (current.check === true) {
      acc++
    }

    return acc
  }, 0)

  const total = todo.length

  return (
    <div>
      <Header />
      <section className={styles._mt_28}>
        <div className={styles.container}>
          <form onSubmit={handleCreateNewTodo} className={styles.form}>
            <input
              type="text"
              className={styles.input}
              value={newTodo.text}
              onChange={handleNewTodoChange}
              placeholder="Adicione uma nova tarefa"
            />
            <button className={styles.button}>
              Criar <PlusCircle size={18} weight="bold" />
            </button>
          </form>
        </div>
      </section>
      <section className={styles.pt_64}>
        <div className={styles.container}>
          <Info total={total} check={totalCheck} />
          {!todo.length ? (
            <Empty />
          ) : (
            <List
              todo={todo}
              onDeleteTodo={deleteTodo}
              onCheckTodo={checkTodo}
            />
          )}
        </div>
      </section>
    </div>
  )
}
