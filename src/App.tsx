import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container } from './components/Container'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { List } from './components/List'
import './global.css'

export interface Task {
  id: string
  isCompleted: boolean
  content: string
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(task: string) {
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      content: task,
    }

    setTasks(state => [...state, newTask])
  }

  function handleDeleteTaskById(id: string) {
    const tasksWithoutOne = tasks.filter(task => task.id !== id)

    setTasks(tasksWithoutOne)
  }

  function handleChangeTaskStatus(id: string) {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(tasksUpdated)
  }

  return (
    <div>
      <Header />
      <Container>
        <Form onHandleAddTask={handleAddTask} />
        <List
          onHandleDeleteTaskById={handleDeleteTaskById}
          onHandleChangeTaskStatus={handleChangeTaskStatus}
          tasks={tasks}
        />
      </Container>
    </div>
  )
}
