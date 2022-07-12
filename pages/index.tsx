import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

/* 
Ici, on a modifié Layout pour que ses props soient un array de JSX.Element
-- cf le fichier components/layout.tsx

On veut vraiment éviter le tableau de JSX.Element, autant pour le display que pour
des raisons mystiques. Go essayer de faire un fragment.
*/
const Home: NextPage = () => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hello, I&apos;m{' '}
            <span className={utilStyles.bold}>Tanguy</span>
            , I&apos;m 21 years old, and i do programming
          </p>
          <p>
            (This is a template website - you&apos;ll be building a site like this on {' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
          </p>
        </section>
      </>
    </Layout>
  );
}

export default Home;
