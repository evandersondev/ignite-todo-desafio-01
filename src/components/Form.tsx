import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './Form.module.css'

interface FormProps {
  onHandleAddTask: (task: string) => void
}

export function Form({ onHandleAddTask }: FormProps) {
  const [taskInput, setTaskInput] = useState('')

  function createTask(event: FormEvent) {
    event.preventDefault()

    onHandleAddTask(taskInput)
    setTaskInput('')
  }

  return (
    <form onSubmit={createTask} className={styles.form}>
      <input
        value={taskInput}
        onChange={event => setTaskInput(event.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  )
}
