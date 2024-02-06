import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>DL</div>
      <div className={styles.navbarLinks}>
        <p>Home</p>
        <p>Tech</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}
