import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>

        <div>
          <div>{auth?.user?.email}</div>
          {auth?.user ? (
            <button onClick={(e) => auth.signout()}>Sign Out</button>
          ) : (
            <button onClick={(e) => auth.signinWithGithub()}>
              Sign In with Github
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
