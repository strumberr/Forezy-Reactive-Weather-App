import Head from 'next/head'
import styles from '@/styles/about.module.css'
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

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>

                    <div className={styles.menu}>
                        <div className={styles.navigateButtons}>
                            <Link className={styles.homeButton} href="/">Home</Link>

                            <div className={styles.aboutButton}>
                            About
                            </div>
                        </div>

                        <Link href="/weather_app" className={styles.mobileButton}>
                            
                        </Link>
                    </div>

                    <div className={styles.innerBox2}>
                        <div>
                            Hey there, welcome to Forezy - where weather gets a friendly makeover! We're here to banish boring forecasts and bring a fresh, relaxed vibe to weather updates. Get ready to experience weather in a fun and laid-back way! Rest assured, our team combines real-time data and cutting-edge forecasting techniques to give you accurate and reliable information. Stay ahead of the weather game effortlessly with Forezy. Join us and embrace a new approach to weather - one that's chill, friendly, and perfect for your everyday adventures!
                        </div>
                    </div>

                </div>
            )}

            

                
            

        </div>
    )
}

export default App;