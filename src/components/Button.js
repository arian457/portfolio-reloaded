import styles from '../styles/button.module.css'

export default function Button({type, size, children}) {
    return (
        <button id="Button" className={`${styles.btn} ${styles[size]} ${styles[type]} ease`}>
            {children}
        </button>
    )
}
