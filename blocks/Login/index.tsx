import { useState, useEffect, useContext } from "react";
import { useSwr } from "swr";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useUserIdContext } from '@contexts/UserId';

import { login } from '@lib/api';
import { userSession } from '@lib/sessionStorage';

import styles from './login.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json());

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
}

export default function Login() {
  const [username, setUsername] = useState('');
  const { data: session } = useSession();
  const [userId, setUserId] = useUserIdContext();
  const router = useRouter();


  const handleInput = (e) => {
    setUsername(e.target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formElements = form.elements as FormElements;
    const email = formElements.email.value;
    console.log('Email: ', email);
    const { data, resultCode } = await login(email);
    if (data.result_code === resultCode.LOGIN_SUCCESS) {
      console.log(data.result_message);
      userSession.saveUser(data.user.id);
      setUserId(data.user.id);
    } else {
      console.error('Login failed!');
      console.error(data.result_message);
    }
  }

    return (
        <form onSubmit={handleFormSubmit}>
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          <input className={styles.input} onInput={handleInput} name="email" type="email" required placeholder="Enter your email..." />
          <button type="submit">Submit</button>
          {/* <p>OR</p> */}
          {/* {session?.user?.email
          ? <button type="button" onClick={() => signOut()} className={styles.submit_button}>Log out with GMail</button>
          : <button type="button" onClick={() => signIn("google")} className={styles.submit_button}>Log in with GMail</button>} */}
        </form>
    )
}