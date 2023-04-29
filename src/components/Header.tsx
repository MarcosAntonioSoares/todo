import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="logo.png" />
      </div>
    </header>
  )
}