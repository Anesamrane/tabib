import Navbar from '@/componant/navbar/Navbar'
import styles from './page.module.css'
import React from 'react'
import Main from '@/componant/main/Main'
import Why from '@/componant/why-us/Why'
import Work from '@/componant/work/Work'
import Workwithus from '@/componant/workwithus/Workwithus'
import Footer from '@/componant/footer/Footer'

function page() {
  return (
    <div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
      <div className={styles.why}>
        <Why />
      </div>
      <div className={styles.work}>
        <Work />
      </div>
      <div className={styles.Workwithus}>
        <Workwithus />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default page
