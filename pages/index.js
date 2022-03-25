import Head from 'next/head'
  import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tenetur exercitationem, aspernatur eaque debitis inventore optio deleniti, molestias, blanditiis ipsa animi totam natus sit omnis odit quibusdam nobis earum perspiciatis.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>
  )
}
