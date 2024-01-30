import styles from './page.module.css'
import Navbar from './navbar.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>Hello World!</div>
    </main>
  )
}
