import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.descriptionFooter}>
                    Aeroporto 7, 4005 - Industrial Teresina, Piauí PI - 57567-970.
                    emailexemplo@example.ts
                </p>
                <div >
                    <ul className={styles.socialMidia}>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                    </ul>
                </div>
            </div>

            <ul className={styles.listFooter}>
                <li className={styles.itemLink}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>


        </footer>
    )

}