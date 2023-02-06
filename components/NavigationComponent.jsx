import Link from "next/link";
import styles from '../styles/Navigation.module.css';
import { useDispatch } from 'react-redux'
import { logout } from "../redux/slices/authSlice";

export default function NavigationComponent({ links = [], logged = false }){

    const dispatch = useDispatch();
    
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                {
                    links.map((link, index) => (
                        <li key={`${index}_navigation`} className={styles.li}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>

                    ))
                }
                {
                    logged ? (
                        <li key={'logout_navigation'} className={styles.li}>
                            <button onClick={() => dispatch(logout())} className={styles.logout}>Logout</button>
                        </li>
                    ) : null
                }
            </ul>
        </header>
    )
}