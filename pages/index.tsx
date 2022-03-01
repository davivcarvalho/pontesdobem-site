import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pontes do Bem</title>
        <meta name="description" content="Site da ONG Pontes do Bem" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            alt="Ponte"
            src="/bridge.png"
            layout='responsive'
            objectFit='contain'
            width={500}
            height={500}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.subtitle}>
            ONG
          </p>
          <h1 className={styles.title}>
            PONTES DO BEM
          </h1>
          <span className={styles.description}>
            <Image src="/traffic-cone.svg" alt="Construction Logo" width={30} height={30} />
            <p>... em construção!</p>
          </span>
        
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          className={styles.icon}
          href="https://github.com/davivcarvalho/pontesdobem-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="Github Logo" width={30} height={30} />
        </a>
        <span className={styles.icon} >
          <Image className={styles.disabled} src="/instagram.svg" alt="Instagram Logo" width={30} height={30} />
        </span>
        <span className={styles.icon} >
          <Image className={styles.disabled} src="/facebook.svg" alt="Facebook Logo" width={30} height={30} />
        </span>

        <a
          href="https://github.com/davivcarvalho/pontesdobem-site"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <Image src="/whatsapp.svg" className={styles.whatsapp} alt="Whatsapp Logo" width={30} height={30} />
        </a>

      </footer>
    </div>
  )
}

export default Home
