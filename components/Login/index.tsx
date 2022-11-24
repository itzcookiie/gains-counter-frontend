interface Props {
  className: string;
}

export default function Login(props: Props) {
    return (
        <div className={props.className}>
          <h3>Enter your username:</h3>
          <input name="username" required />
          <p>If you do not have an account already, create one automatically by entering a chosen username</p>
        </div>
    )
}