import Link from 'next/link'

import styles from './template.module.scss';
import Container from 'react-bootstrap/Container';


interface Props {

}

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
        <a className="navbar-brand" href="#">Gains counter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/results" legacyBehavior>
                <a className="nav-link">Results</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}