import Head from 'next/head'
import styles from '@/styles/index.module.css'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const clearAssetsPath = '/assets/other/';
const artLeft = `${clearAssetsPath}artLeft.png`;
const artRight = `${clearAssetsPath}artRight.png`;


export default function Home() {
  return (
    <div className={styles.whole_page}>
      <Head>
        <title>Weethy</title>
        <meta name="description" content="Where art effortlessly blends with friendly forecasts!" />
      </Head>

      <img className={styles.artLeft} src={artLeft} alt="artLeft" />
      <img className={styles.artRight} src={artRight} alt="artRight" />

      <div className={styles.elementTitleSub}>
        <div className={styles.titleCenter}>weethy</div>
        <div className={styles.subtitleCenter}>Where art effortlessly blends with friendly forecasts!</div>
      </div>

      <div className={styles.menu}>
        <div className={styles.navigateButtons}>
          <div className={styles.homeButton}>
            Home
          </div>
          <div className={styles.aboutButton}>
            About
          </div>
        </div>

        <div className={styles.mobileButton}>
          Open on mobile!
        </div>
      </div>

      <style jsx global>
        {`
            body {
              background-color: #B1B4FE;
            }
        `}
      </style>

    </div>
  )
}
