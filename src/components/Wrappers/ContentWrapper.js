import styles from "../../styles/wrappers.module.css"

export default function ContentWrapper({children}) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}
