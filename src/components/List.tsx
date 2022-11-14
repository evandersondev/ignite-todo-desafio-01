import { Task } from '../App'
import ClipboardImg from '../assets/clipboard.svg'
import { Item } from './Item'

import styles from './List.module.css'

interface ListProps {
  tasks: Task[]
  onHandleDeleteTaskById: (id: string) => void
  onHandleChangeTaskStatus: (id: string) => void
}

export function List({
  tasks,
  onHandleDeleteTaskById,
  onHandleChangeTaskStatus,
}: ListProps) {
  const totalTasksCompleted = tasks.filter(
    task => task.isCompleted === true,
  ).length

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <div className={styles.allTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.doneTasks}>
          <strong>Concluídas</strong>
          <span>
            {tasks.length === 0
              ? 0
              : `${totalTasksCompleted} de ${tasks.length}`}
          </span>
        </div>
      </header>

      {tasks.length === 0 ? (
        <main className={styles.emptyList}>
          <img src={ClipboardImg} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
      ) : (
        tasks.map(task => {
          return (
            <Item
              id={task.id}
              isCompleted={task.isCompleted}
              content={task.content}
              onHandleDeleteTaskById={onHandleDeleteTaskById}
              onHandleChangeTaskStatus={onHandleChangeTaskStatus}
            />
          )
        })
      )}
    </div>
  )
}
