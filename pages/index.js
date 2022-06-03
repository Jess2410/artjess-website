import About from '../components/About/About'
import Header from '../components/Header/Header'
import Transition from '../components/Transition/Transition'
import styles from '../styles/Home.module.css'
import '../components/Services/Services.module.css'
import Services from '../components/Services/Services'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'




export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  )
}
