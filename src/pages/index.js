import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import Muestras from './portada/albun'
import { Cakes } from './Cakes'
import { Header } from '../components/Header'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Header/>
        <Cakes/>
        <Muestras></Muestras>
        
      </div>
    </>
  )
}
