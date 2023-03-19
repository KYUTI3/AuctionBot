import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Aboutpage() {
  return (
    <div className={styles.main}>
        
    <h1>About Us</h1>
     <Link href="/about"> Home Page </Link>   


    </div>
  )
}

