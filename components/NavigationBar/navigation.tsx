import utilStyles from '../../styles/utils.module.css'
import styles from './navigation.module.css'
import Link from 'next/link'


export default function NavigationBar() : JSX.Element {
  return(
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.navigationItem}>
            Home
          </a>
        </Link>
        <Link href="/posts/first-post">
          <a className={styles.navigationItem}>
            Blog
          </a>
        </Link>
        <Link href="/game/all-rights-clicker">
          <a className={utilStyles.navigationItem}>
            Clicker
          </a>
        </Link>
      </div>
    </div>
  )
}