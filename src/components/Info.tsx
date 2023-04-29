import styles from './Info.module.css'

interface InfoProps {
  total: number
  check: number
}

export function Info({ total, check }: InfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        Tarefas criadas
        <span className={styles.counter}>{total}</span>
      </div>
      <div className={styles.done}>
        Concluídas
        <span className={styles.counter}>
          {total ? `${check} de ${total}` : total}
        </span>
      </div>
    </div>
  )
}
