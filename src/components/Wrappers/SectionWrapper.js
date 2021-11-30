import styles from "../../styles/wrappers.module.css"

export default function SectionWrapper({children}) {
    return (
        <div className={styles.section}>
            {children}
        </div>
    )
}
