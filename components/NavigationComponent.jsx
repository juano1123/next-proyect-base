import Link from "next/link";
import styles from '../styles/Navigation.module.css';

export default function NavigationComponent({ links = [] }){
    
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
            </ul>
        </header>
    )
}