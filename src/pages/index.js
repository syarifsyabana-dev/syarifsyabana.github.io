import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Syarif Sya'bana
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>New site cooming soon</code>
        </p>

      </main>
    </div>
  )
}
