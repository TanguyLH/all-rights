import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'
import Cookie from "../../components/cookie/cookie";
import style from '../../styles/all-rights-clicker.module.css'

export default function allRightsClicker() {
  const home = false
  return(
    <Layout home>
      <>
        <Head>
          <title>All Rights Clicker</title>
        </Head>
        <h1 className={`${utilStyles.headingLg} ${style.header}`}>All Rights Clicker <br /> The game</h1>
        <Cookie />
      </>
    </Layout>
  );
}