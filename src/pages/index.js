import Head from 'next/head'
import styles from '@/styles/index.module.css'
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionValue, useLayoutEffect } from "framer-motion"
import { useEffect, useState } from 'react';
import { weatherIdReturner, iconProcessor } from "@/extraFunctions/_animationsMain.jsx";
import Link from 'next/link';



const clearAssetsPath = '/assets/other/';
const artLeft = `${clearAssetsPath}artLeft.png`;
const artRight = `${clearAssetsPath}artRight.png`;
const mobileCenter = `${clearAssetsPath}mobileCenter.png`;
const mobileLeft = `${clearAssetsPath}mobileLeft.png`;
const mobileRight = `${clearAssetsPath}mobileRight.png`;
const snowBack = `${clearAssetsPath}snowBack.png`;


const openWeatherMapApi = process.env.NEXT_PUBLIC_OWM_API_KEY;
const geoapifyApi = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
const ipDataApi = process.env.NEXT_PUBLIC_IPDATA_API_KEY;
const visualCrossingApKeys = [process.env.NEXT_PUBLIC_VAPI_KEY1, process.env.NEXT_PUBLIC_VAPI_KEY2, process.env.NEXT_PUBLIC_VAPI_KEY3];
const randomVisualCrossingApKeys = visualCrossingApKeys[Math.floor(Math.random() * visualCrossingApKeys.length)];



export default function Home() {
  const scrollY = useMotionValue(0);
  const translateY = useTransform(scrollY, [0, (typeof window !== 'undefined' && window.innerHeight) || 0], [0, 200]);
  const scale = useTransform(scrollY, [0, (typeof window !== 'undefined' && window.innerHeight) || 0], [1, 0.6]);
  const translateX = useTransform(scrollY, [0, (typeof window !== 'undefined' && window.innerHeight) || 0], [0, 200]);
  const translateXOpposite = useTransform(scrollY, [0, (typeof window !== 'undefined' && window.innerHeight) || 0], [0, -200]);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    scrollY.set(window.scrollY);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  var text;
  var text2;

  if (isMobile) {
    text = "Forezy is a\nWeb based\napp that\nprimarily\nfocuses on\ndelivering\nweather\ninformation\nin a fun and\nfriendly way\nto the user"
    text2 = "Gone are the\ndays of dull and\nmonotonous\nweather reports.\nForezy takes a\nrefreshing\napproach by\npresenting\nweather data in\na visually\nappealing and\ninteractive\nmanner."
  } else {
    text = "Forezy is a Web based\napp that primarily\nfocuses on delivering\nweather information in a\nfun and friendly way to\nthe user"
    text2 = "Gone are the\ndays of dull and\nmonotonous\nweather reports.\nForezy takes a\nrefreshing\napproach by\npresenting\nweather data in\na visually\nappealing and\ninteractive\nmanner."
  }
  const words = text.split(" ");
  const words2 = text2.split(" ");
  
  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  // Variants for Container of words.
  const container2 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Variants for each word.

  const child2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  //-----------------------------------------------------

  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherId, setWeatherId] = useState(null);
  const [visualCrossingData, setVisualCrossingData] = useState(null);



  useEffect(() => {


    if (window.innerWidth >= 767) {
      const runMainThing2 = async () => {


            
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          const apiUrl = `https://api.ipdata.co/${ipAddress}?api-key=${ipDataApi}`;
    
          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              
              var tempLocation = data.city;
              var tempLat = data.latitude;
              var tempLon = data.longitude;
    
              setCity(data.city);
    
              const FetchData = async () => {
                
                try {
                  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${tempLocation}?unitGroup=metric&key=${randomVisualCrossingApKeys}&contentType=json`);
                  const jsonData = await response.json();

                  setTemperature(jsonData.currentConditions.temp)
                  setVisualCrossingData(jsonData)

                  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${tempLat}&lon=${tempLon}&appid=${openWeatherMapApi}&units=metric`)
                  .then(response => response.json())
                  .then(data => {
                    setWeatherId(data.weather[0].id);

                    setIsLoading(false);
                  }
                  )
    
                } catch (error) {
                  
                }
    
              };
    
              FetchData();

            })            
        })
      };
    
      runMainThing2();
    } else {
      setIsLoading(false);
    }

  }, [weatherId]);

    
  const [weather, backgroudColor, objectColor, moreInfoBackColor, offColor] = weatherIdReturner(200)




  var hoursTempX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3];
  var hoursTempXGraphVer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  var hoursTempActualY = [];
  var tempMax7 = [];
  var tempMin7 = [];
  var days = [];
  var iconArray = [];

  var detailsSpecHour = [];



  if (visualCrossingData && visualCrossingData.days) {
    for (var i = 1; i < 7; i++) {
      var tempMax = visualCrossingData.days[i].tempmax;
      var tempMin = visualCrossingData.days[i].tempmin;
      var day = visualCrossingData.days[i].datetime;
      var parsedTempMax = parseFloat(tempMax);
      var parsedTempMin = parseFloat(tempMin);
      var roundedTempMax = Math.round(parsedTempMax);
      var roundedTempMin = Math.round(parsedTempMin);
      var indIcon = visualCrossingData.days[i].icon;


      //indIcon = "clear-day"
      var svgIcon = iconProcessor(indIcon);



      tempMax7.push(roundedTempMax);
      tempMin7.push(roundedTempMin);
      days.push(day);
      iconArray.push(svgIcon)

    }
  } else {
  }

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the current date
  const today = new Date();

  var dayList = [];

  for (let i = 1; i <= 7; i++) {
    const nextDate = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));

    const dayOfWeek = daysOfWeek[nextDate.getDay()];
    const dayOfMonth = nextDate.getDate();

    dayList.push(`${dayOfWeek} ${dayOfMonth}`);
  }


  const weatherList = tempMax7.map((maxTemp, index) => (
    <div key={index} className={styles.tempBox2}>
        <div className={styles.dayString2}>
          <div style={{ color: objectColor }}>{dayList[index]}</div>
        </div>

        <div className={styles.iconWeather2}>{iconArray[index]}</div>

        <div className={styles.tempArrow2}>

          <div className={styles.arrows2}>
            <svg className={styles.arrowUp2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/></svg>
            <svg className={styles.arrowDown2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L54.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>
          </div>

          <div>
              <div style={{ color: objectColor }} className={styles.maxTemp2}>{maxTemp}°</div>
              <div style={{ color: objectColor }} className={styles.minTemp2}>{tempMin7[index]}°</div>
          </div>

          
        </div>
    </div>

      
  ));


  const animationsPart = (
    <div>
      <motion.img
          className={styles.leftMobile}
          src={mobileLeft}
          alt="mobile"
          style={{ y: translateY, scale: scale, x: translateX }}
        />
        <motion.img
          className={styles.rightMobile}
          src={mobileRight}
          alt="mobile"
          style={{ y: translateY, scale: scale, x: translateXOpposite }}
        />

        <div className={styles.continuationPage}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView={"visible"}
            
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "5px" }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
    </div>
  )


  const nonAnimationsPart = (
    <div>
      <div className={styles.secondWholePage2}></div>
      <div className={styles.secondWholePage}>
        <div className={styles.secondWholePageTop}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleMobile}>
              forezy
            </div>
            <div className={styles.subtitleMobile}>
              Where art effortlessly blends with friendly forecasts! 
            </div>
          </div>
        </div>
        <div className={styles.secondWholePageBottom}>
          <div className={styles.secondWholePageBottomTop}>
            <img className={styles.leftMobile} src={mobileLeft} alt="mobile" />
            <div className={styles.textWrapper}>
              <div className={styles.continuationPage}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView={"visible"}
                  
                >
                  {words.map((word, index) => (
                    <motion.span
                      variants={child}
                      style={{ marginRight: "5px" }}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles.secondWholePageBottomBottom}>
            <div className={styles.continuationPage}>
              <motion.div
                variants={container2}
                initial="hidden"
                whileInView={"visible"}
                
              >
                {words2.map((word, index) => (
                  <motion.span
                    variants={child2}
                    style={{ marginRight: "5px" }}
                    key={index}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <img className={styles.rightMobile} src={mobileRight} alt="mobile" />
          </div>
        </div>
      </div>

    </div>
  )


  

  //-----------------------------------------------------

  if (isLoading === true) {
    return (
      
      <div className='bigBox'>
        <div class="animation_loading">
          <span class="loader"></span>
          <div class="looking_outside">Looking Outside...</div>
          <span class="loaderBar"></span>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.whole_page}>
        <Head>
          <title>Forezy</title>
          <meta name="description" content="Where art effortlessly blends with friendly forecasts!" />
        </Head>

        <img className={styles.artLeft} src={artLeft} alt="artLeft" />
        <img className={styles.artRight} src={artRight} alt="artRight" />
        <img className={styles.mobileCenter} src={mobileCenter} alt="mobileCenter" />

        <div className={styles.elementTitleSub}>
          <div style={{ borderColor: offColor }} className={styles.elementTitleSubSubber}>
            <div className={styles.topHalfInfoBox}>
              <div className={styles.topHalfInfoBoxHalfLeft}>
                <div className={styles.topHalfInfoBoxHalfLeftTop}>
                  <div style={{ color: objectColor }} className={styles.temperatureMain}>{temperature}°C</div>
                </div>
                <div className={styles.topHalfInfoBoxHalfLeftBottom}>
                  <div className={styles.locationIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-geo" viewBox="0 0 18 26" stroke={objectColor} strokeWidth="0.2px">
                      <path fill={objectColor} d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                    </svg>
                  </div>
                  <div style={{ color: objectColor }} className={styles.locationText}>{city}</div>
                </div>
              </div>
              <div className={styles.topHalfInfoBoxHalfRight}>

              </div>
            </div>

            <div className={styles.BottomHalfInfoBox}>
              <div className={styles.scrollerIndex}>
                <div className={styles.futuresTempIndex}>
                    {weatherList}
                </div>
              </div>
            </div>
          </div>

          <div style={{ color: objectColor }} className={styles.subtitleCenter}>Where art effortlessly blends with friendly forecasts!</div>
        </div>


        
    

        <div className={styles.menu}>
          <div className={styles.navigateButtons}>
            <div className={styles.homeButton}>
              Home
            </div>

            <Link style={{ textDecoration: "none"}} className={styles.aboutButton} href="/about">About</Link>
          </div>

          <Link href="/weather_app" className={styles.mobileButton}>
            
          </Link>
        </div>

        <style jsx global>
          {`
              body {
                background-color: #B1B4FE;
              }
          `}
        </style>

        <img className={styles.snowBack} src={snowBack} alt="snow" />


        
        {isMobile === true && (
          <div>{nonAnimationsPart}</div>
        )}
        {isMobile === false && (
          <div>{animationsPart}</div>
        )}

        

      </div>
    )
  }
}
