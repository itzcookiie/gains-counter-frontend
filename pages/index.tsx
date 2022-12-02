import styles from '../styles/home.module.scss';
import HomeLogin from '../components/HomeLogin/index';
import HomeNormal from '../components/HomeNormal/index';

function Home() {
  return (
    <main className={styles.main}>
      <HomeNormal />
    </main>
  )
}

export default Home
