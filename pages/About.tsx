import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About us</title>
        <meta name="description" content="All of our contact information"/>
        <link rel="icon" href="/04-All_Rights.ico"/>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          A propos de nous
        </h1>
        <p>

        </p>
      </main>
    </div>
  );
}

export default About
