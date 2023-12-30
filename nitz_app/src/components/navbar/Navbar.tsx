import Links from "./links/Links";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div>Logo</div>
        <div className={styles.links}>
          <Links></Links>
        </div>
      </div>
    </>
  )
}
