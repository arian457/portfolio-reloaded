import Button from "../components/Button";
import ArgFlag from "../../public/svg/argentina.svg";
import styles from "../styles/Landing.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <main className={`row-xl ${styles.main}`}>
        <div className={`${styles.mainWrapper} ${styles.wrapperLeft}`}>
          <h1> I{"'"}m Arian Cejas </h1>
          <p>FullStack Web Developer</p>
          <div className={`row-s ${styles.from}`}>
            <h2>Based in </h2>
            <Image height={20} width={50} src={ArgFlag} alt="Argentina Flag" />
          </div>
          <div className="row-l">
            <Button type={"primaryOnHover"} size={"medium"}>
              <Link href={"/About"}>
              More About Me →
              </Link>
            </Button>
            <Button type={"secondary"} size={"small"}>
              Hire me →
            </Button>
          </div>
        </div>
        <div className={`${styles.mainWrapper} ${styles.wrapperRight}`}>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.spinContainer}>
                <div className={styles.shape}>
                  <div className={styles.bd}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
