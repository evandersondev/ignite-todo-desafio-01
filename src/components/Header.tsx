import styles from './Header.module.css'
import TodoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={TodoLogo} />
    </header>
  )
}
