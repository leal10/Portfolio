import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>DL</div>
      <div className={styles.navbarLinks}>
        {/* I need to make these links and to go to the correct section when pressed */}
        <a className={styles.Navbarlink} href="#">
          Home
        </a>
        <a className={styles.Navbarlink} href="#">
          Tech
        </a>
        <a className={styles.Navbarlink} href="#">
          Projects
        </a>
        <a className={styles.Navbarlink} href="#">
          Contact
        </a>
      </div>
    </div>
  )
}
