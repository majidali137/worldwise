import Logo from './Logo'
import AppNav from './AppNav'
import styles from './sidebar.module.css'
import { Outlet } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <Outlet/>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
            </p>
        </footer>
    </div>
  )
}
