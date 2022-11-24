import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'
import Login from '../components/Login/index';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flex_parent}>        
        <section className={styles.flex_child_image}>
          <img src='https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' alt='' />
        </section>
        <section className={styles.flex_child_info}>
          <h1>Gains counter</h1>
          <Login className={styles.flex_child_info_login} />
        </section>
      </div>
    </main>
  )
}

export default Home
