import Head from 'next/head'
import styles from '@/styles/appDesktop.module.css'
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionValue, useLayoutEffect } from "framer-motion"
import { useEffect, useState } from 'react';
import Link from 'next/link';
const clearAssetsPath = '/assets/other/';
const QRCode = `${clearAssetsPath}QRcode.png`;

function App() {

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Simulate a 2-second delay before setting isLoading to false
        const delay = setTimeout(() => {
          setIsLoading(false);
        }, 100);
    
        // Clean up the timer when the component unmounts or when isLoading changes
        return () => clearTimeout(delay);
      }, []);


    return (
        <div className={styles.whole_page} style={{ backgroundColor: '#B1B4FE' }}>
            <link rel="manifest" href="/manifest.json"></link>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>

                    <div className={styles.menu}>
                        <div className={styles.navigateButtons}>
                            <Link className={styles.homeButton} href="/">Home</Link>

                            <Link className={styles.aboutButton} href="/about">About</Link>
                        </div>

                        <Link href="/weather_app" className={styles.mobileButton}>
                            
                        </Link>
                    </div>

                    <div className={styles.innerBox2}>
                        <div className={styles.innerBox3}>
                            <div className={styles.heyMessage}>
                                <div>Hey!</div>
                            </div>
                            <div className={styles.subtitles}>
                                This application only works on mobile! 
                            </div>
                            <div className={styles.subsubtitle}>
                                We can instead offer you this QR code to open it on your phone!
                            </div>
                            <div className={styles.subbersubtitle}>
                                Or, you can have the link: <Link style={{ textDecoration: "none", color: "white" }} href="/weather_app">forezy.com/weather_app</Link>
                            </div>
                        </div>

                        <div className={styles.innerBox4}>
                            <img className={styles.imageQR} src={QRCode} />
                        </div>
                    </div>

                </div>
            )}

            

                
            

        </div>
    )
}

export default App;