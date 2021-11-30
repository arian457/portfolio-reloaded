import { useRouter } from "next/dist/client/router";
import styles from "../styles/breadcrumb.module.css";

export default function BreadCrumb() {
    const router = useRouter();
    const { pathname } = router
    
    return (
        <div id="breadcrumb" className={`row-max ${styles.breadCrumb} ease`}>
            <h2><a href={"/"}>Home {"»"}  </a> {pathname.slice(1)} </h2>
        </div>
    )
}
