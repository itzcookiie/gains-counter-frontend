import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'
import Login from '../components/Login/index';

function Home() {
  return (
    <main className={styles.main}>
      <div>        
        <section>
          <img />
        </section>
        <section>
          <h1>Gains counter</h1>
          <Login />
        </section>
      </div>
    </main>
  )
}

export default Home
