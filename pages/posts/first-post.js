import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout'

export default function FirstPost() {

    const MyImage = () => (
        <Image
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt='Maurizio Zucca'
            />
    );

    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <MyImage/>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </Layout>
    );
}