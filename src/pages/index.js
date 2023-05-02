import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import Muestras from './portada/albun'
import { Cakes } from './Cakes'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Cakes/>
        <Muestras></Muestras>
        
      </div>
    </>
  )
}
