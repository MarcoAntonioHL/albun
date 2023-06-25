import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
//import Muestras from './portada/albun'
import Cakes from './Cakes/Cakess'
import { Header } from '../components/Header'
import ThemeContext from '../context/theme'
import Login from './Login/main'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ThemeContext>
        <div className={styles.main}>
            <Header />
            <Cakes />
        </div>
      </ThemeContext>
    </>
  )
}
