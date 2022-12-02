import { useState, useEffect } from "react";
import { useSwr } from "swr";

import styles from './login.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Login() {
  const [username, setUsername] = useState('');

  const handleInput = (e) => {
    setUsername(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputElement = form.querySelector('input');
    const username = inputElement.value;
    console.log(username);
  }

    return (
        <form onSubmit={handleFormSubmit}>
          <h3 className={styles.login_title}>Enter your username:</h3>
          <input className={styles.input} onInput={handleInput} name="username" required />
          <button className={styles.submit_button}>Submit</button>
          <p className={styles.login_tip}>If you do not have an account already, create one automatically by entering a chosen username</p>
        </form>
    )
}