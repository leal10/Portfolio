import styles from './page.module.css'
import Navbar from './navbar.js'
import Main from './main.js'
import Tech from './tech.js'
import Projects from './projects.js'
import Contact from './contact.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Main />
      <Tech />
      <Projects />
      <Contact />
    </main>
  )
}

// THIS IS WHERE I NEED TO ADD ALL MY COMPONENTS
