import { Check, Trash } from 'phosphor-react'
import { MouseEvent } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './Item.module.css'

interface ItemProps {
  id: string
  isCompleted: boolean
  content: string
  onHandleDeleteTaskById: (id: string) => void
  onHandleChangeTaskStatus: (id: string) => void
}

export function Item({
  id,
  content,
  isCompleted,
  onHandleDeleteTaskById,
  onHandleChangeTaskStatus,
}: ItemProps) {
  function deleteTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    onHandleDeleteTaskById(id)
  }

  function updateStatusTask() {
    onHandleChangeTaskStatus(id)
  }

  return (
    <div className={styles.item}>
      <Checkbox.Root
        className={styles.checkbox}
        checked={isCompleted}
        onClick={updateStatusTask}
      >
        <Checkbox.Indicator>
          <Check size={12} weight="bold" className={styles.check} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={isCompleted ? styles.taskCompleted : styles.taskNormal}>
        {content}
      </p>
      <button onClick={deleteTask} className={styles.trashBtn}>
        <Trash size={17.45} />
      </button>
    </div>
  )
}
