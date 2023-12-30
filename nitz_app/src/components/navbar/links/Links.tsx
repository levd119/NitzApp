import styles from '@/components/navbar/links/links.module.css'
import NavLinks from "./navLinks/NavLinks";
export default function Links() {

  return (
    <>
      <div className={styles.links}>
        <NavLinks title="Home" link="/" />
        <NavLinks title="About" link="/about" />
        <NavLinks title="Some Page" link="/somePage" />
      </div>
    </>
  )
}
