import { Link } from "react-router-dom";
import styles from '../../styles/Navbar.module.css';

export default function Navbar(){
    return(
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
    )
}