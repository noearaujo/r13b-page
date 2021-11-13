import styles from '../styles/HOME.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>&copy; {new Date().getFullYear()} R13B. All rights reserved.</div>
        </footer>
    )
}