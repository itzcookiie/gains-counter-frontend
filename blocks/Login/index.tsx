import { useState, useEffect } from "react";
import { useSwr } from "swr";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from './login.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Login() {
  const [username, setUsername] = useState('');
  const { data: session } = useSession();

  const handleInput = (e) => {
    setUsername(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const inputElement = form.querySelector('input');
    // const username = inputElement.value;
    // console.log(username);
  }

    return (
        <form onSubmit={handleFormSubmit}>
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          {/* <h3 className={styles.login_title}>Enter your username:</h3> */}
          {/* <input className={styles.input} onInput={handleInput} name="username" required /> */}
          {session?.user?.name
          ? <button onClick={() => signOut()} className={styles.submit_button}>Log out</button>
          : <button onClick={() => signIn()} className={styles.submit_button}>Log in</button>}
          {/* <p className={styles.login_tip}>If you do not have an account already, create one automatically by entering a chosen username</p> */}
        </form>
    )
}