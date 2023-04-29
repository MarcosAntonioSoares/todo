import { InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
}

export function Checkbox({ checked, ...props }: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} {...props} />
      <span className={styles.checkmark}></span>
    </label>
  )
}
