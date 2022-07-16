import Link from 'next/link'
import Script from 'next/script';
import Layout from '../../components/layout'
import Head from 'next/head';

export default function firstPost() {
    return(
        <Layout home>
            <>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>
                    First Post
                </h1>
                <h2 className="title">
                    Let's go{' '}
                    <Link href="/">
                        <a>back home</a>
                    </Link>
                </h2>
            </>
        </Layout>
    );
}