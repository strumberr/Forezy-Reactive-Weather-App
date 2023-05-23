// import '@/styles/weatherApp.css';
import React, { useState, useEffect, Component, useRef } from 'react';
import {MyComponent} from '@/extraFunctions/_top_func.jsx';
import {LineChart} from '@/extraFunctions/_graphHours.jsx';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
// import '@/styles/animationMain.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';



import {
  bigSun,
  smallSun,
  smallSun2,
  bigCloud,
  smallCloud,
  smallCloud2,
  bigDrop,
  smallDrop,
  smallDrop2,
  bigSnow,
  smallSnow,
  smallSnow2,
  snowGround,
  bigThunder, 
  smallThunder,
  smallThunder2
} from '/public/_images.jsx';

// const inter = Inter({ subsets: ['latin'] })

const visualCrossingApKeys = [process.env.NEXT_PUBLIC_VAPI_KEY1, process.env.NEXT_PUBLIC_VAPI_KEY2, process.env.NEXT_PUBLIC_VAPI_KEY3];

const openWeatherMapApi = process.env.NEXT_PUBLIC_OWM_API_KEY;

const geoapifyApi = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

const ipDataApi = process.env.NEXT_PUBLIC_IPDATA_API_KEY;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


//console.log = console.warn = console.error = () => {};

function GetLocPrec() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude + 0.1;
      const longitude = position.coords.longitude + 0.1;
      setLatitude(latitude);
      setLongitude(longitude);

    });
  }, []);

  return [latitude, longitude];
}






async function reverseGeocode(latitude, longitude) {
  try {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoapifyApi}`);
    const data = await response.json();
    const location = data.features[0].properties.city;



    return location;
  } catch (error) {
    console.error("eeee", error);
  }
}







function App() {

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState("");
  const [locationMain, setLocationMain] = useState(null);
  const [locationFirst, setLocationFirst] = useState(false);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // set initial background color

  

  const [latitudeMain, setLatitudeMain] = useState(0);
  const [longitudeMain, setLongitudeMain] = useState(0);
  const [locAccess, setLocAccess] = useState(false);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [latitudeGeo, longitudeGeo] = GetLocPrec();


  const [locationPermission, setLocationPermission] = useState(false);

  const [tempLatLoad, setTempLatLoad] = useState(0);
  const [tempLonLoad, setTempLonLoad] = useState(0);

  var tempLat = 0;
  var tempLon = 0;

  const [submitLoading, setSubmitLoading] = useState(false);

  const [userHasGiven, setUserHasGiven] = useState(false)



  const [locationLoaded, setLocationLoaded] = useState(false);

  const [isClient, setIsClient] = useState(false);

  
  

  function errorCallback() {
    setIsClient(true);

    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude + 0.01;
        const longitude = position.coords.longitude + 0.01;
        setLatitudeMain(latitude);
        setLongitudeMain(longitude);

        setUserHasGiven(true)

        setTempLatLoad(latitude);
        setTempLonLoad(longitude);

        tempLat = latitude;
        tempLon = longitude;


        reverseGeocode(latitude, longitude).then((location) => {
          setLocationMain(location);
          document.title = "Weather In " + location;
        }
        );
      });
    
  }
  
  const [screenTooBig, setScreenTooBig] = useState(false);

  useEffect(() => {

    const handleWindowSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 480) {
        setScreenTooBig(true);
        router.push('/');
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleWindowSize);

    // Initial check on component mount
    handleWindowSize();


    window.document.body.style.overflowX = 'hidden';

    
    console.log("starting app")
    console.log("Hello! Here is my GitHub: https://github.com/strumberr")

    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude + 0.01;
        const longitude = position.coords.longitude + 0.01;
        setLatitudeMain(latitude);
        setLongitudeMain(longitude);

        setUserHasGiven(true)

        setTempLatLoad(latitude);
        setTempLonLoad(longitude);

        tempLat = latitude;
        tempLon = longitude;

        // console.log(tempLat)
        // console.log(tempLon)


        reverseGeocode(latitude, longitude).then((location) => {
          setLocationMain(location);
          document.title = "Weather In " + location;
        }
        );

        if (locationMain === null || locationMain === undefined || locationMain === "") {
          setLocationLoaded(false);
          errorCallback();
        } else {
          // Location already set, no need to fetch again
          setLocationLoaded(true);
          // console.log('Location already set:', locationMain);
        }

        

        const runMainThing = async () => {

          // console.log("running main thing 1")
            
          const FetchData = async () => {

                
            try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${tempLat}&lon=${tempLon}&appid=${openWeatherMapApi}&units=metric`);
              const jsonData = await response.json();
              setData(jsonData);
              setSubmitLoading(true);
              

            } catch (error) {
              setError(error);
              
            }

            setIsLoading(false);
          };

          FetchData();
        };

        runMainThing();
      },
      function(error) {

        setUserHasGiven(false)

        const runMainThing2 = async () => {

          // console.log("running main thing 2")
              
          fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            const ipAddress = data.ip;

            
            const apiUrl = `https://api.ipdata.co/${ipAddress}?api-key=${ipDataApi}`;

            fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                
                const country = data.country_name;
                var latitude2 = data.latitude;
                var longitude2 = data.longitude;

                setLocationMain(data.city);
                // console.log("ip address", data.city)
                // console.log("lat", latitude2)
                // console.log("lon", longitude2)

                const FetchData = async () => {
                  
                  try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&appid=${openWeatherMapApi}&units=metric`);
                    const jsonData = await response.json();
                    // console.log("json data", jsonData)
                    setData(jsonData);
                    setSubmitLoading(true);

                  } catch (error) {
                    setError(error);
                    
                  }

                  setIsLoading(false);
                };

                FetchData();

              })
              .catch(error => console.error(error));
              
          })
        };

        runMainThing2();
      }
    );

  }, [locationMain, submitLoading, tempLatLoad, locationLoaded]);


  if (locationMain === null || locationMain === undefined || locationMain === "") {
    setLocationMain("Couldn't find location");
  }


  // console.log("location main", locationMain)
  const json_string = JSON.stringify(data, null, 2);

  // console.log("setIsLoading", submitLoading)

  const jsonObject = JSON.parse(json_string);

  var weather;
  var wind;
  var humidity;
  var weatherId;
  var description;
  var weatherSecondary;
  var backgroudColor;

  const { scrollYProgress } = useScroll()

  
  //test

  if (jsonObject && jsonObject.weather) {

    var weather = jsonObject.weather[0].main;
    weather = weather.toString();
    wind = jsonObject.wind.speed;
    humidity = jsonObject.main.humidity;
    weatherId = jsonObject.weather[0].id;
    //weatherId = 500;
    description = jsonObject.weather[0].description;


    var objectColor;
    var extraArt;
    var moreInfoBackColor;
  

    if (weatherId >= 200 && weatherId <= 232) {
      document.body.style.backgroundColor = "#324D68";
      weather = "Thunderstorm";
      objectColor = "#ffffff"
      backgroudColor = "#324D68";
      moreInfoBackColor = "#ACC5DE";

      var rainAnimation;

      if (description.includes("rain")) {
        weatherSecondary = "Rain";
        weather = "Rainy Thunderstorm";

        rainAnimation = (
          <div id="cloud">
            <span class="shadow"></span>
            <div class="rain">
              <div class="drop d1"></div>
              <div class="drop d2"></div>
              <div class="drop d3"></div>
              <div class="drop d4"></div>
              <div class="drop d5"></div>
              <div class="drop d6"></div>
              <div class="drop d7"></div>
              <div class="drop d8"></div>
              <div class="drop d9"></div>
              <div class="drop d10"></div>
              <div class="drop d11"></div>
              <div class="drop d12"></div>
              <div class="drop d13"></div>
              <div class="drop d14"></div>
              <div class="drop d15"></div>
            </div>
          </div>
        )

      }

      const extraArtDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "90%",
        height: "auto",
        zIndex: "-1",
      }
      const smallSunDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        right: "0",
        width: "14%",
        marginTop: "12%",
        marginRight: "10%",
        zIndex: "-1",
      }
      const smallSunDesign2 = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        width: "12%",
        marginTop: "28%",
        marginLeft: "10%",
        zIndex: "-1",
      }
      
      extraArt = (
        <div>

          {rainAnimation}

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 3, duration: 2 }}
            style={{ zIndex: "-4" }}
          >
            <div id="cloud">
              <span className="shadow"></span>
              <div className="rain">
                <div className="drop d1"></div>
                <div className="drop d2"></div>
                <div className="drop d3"></div>
                <div className="drop d4"></div>
                <div className="drop d5"></div>
                <div className="drop d6"></div>
                <div className="drop d7"></div>
                <div className="drop d8"></div>
                <div className="drop d9"></div>
                <div className="drop d10"></div>
                <div className="drop d11"></div>
                <div className="drop d12"></div>
                <div className="drop d13"></div>
                <div className="drop d14"></div>
                <div className="drop d15"></div>
              </div>
            </div>
          </motion.div>

          
          <motion.img
            src={bigThunder}
            style={extraArtDesign}
            animate={{
              y: [-600, 0],
              scale: [0, 1]

            }}
            transition={{
              duration: 4,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />
          

          <motion.img
            src={smallThunder}
            style={smallSunDesign}
            animate={{
              y: [-300, 0],
              scale: [0, 1]
            }}
            transition={{
              duration: 2,
              delay: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />

          <motion.img
            src={smallThunder2}
            style={smallSunDesign2}
            animate={{
              y: [-300, 0],
              scale: [0, 1]

            }}
            transition={{
              delay: 2.5,
              duration: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />

        </div>
      )



    } else if (weatherId >= 300 && weatherId <= 321) {
      document.body.style.backgroundColor = "#1B1B1B";
      weather = "Drizzle";
      objectColor = "#ffffff"
      backgroudColor = "#1B1B1B";

    } else if (weatherId >= 500 && weatherId <= 531) {
      document.body.style.backgroundColor = "#054A91";
      weather = "Rain";
      objectColor = "#ffffff"
      backgroudColor = "#054A91";
      moreInfoBackColor = "#91BDEB";


      const extraArtDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "90%",
        height: "auto",
        zIndex: "-1",
      }
      const smallSunDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        right: "0",
        width: "16%",
        marginTop: "12%",
        marginRight: "10%",
      }
      const smallSunDesign2 = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        width: "15%",
        marginTop: "20%",
        marginLeft: "10%",
      }
      
      extraArt = (
        <div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 4, duration: 2 }}
            style={{ zIndex: "-4" }}
          >
            <div id="cloud">
              <span className="shadow"></span>
              <div className="rain">
                <div className="drop d1"></div>
                <div className="drop d2"></div>
                <div className="drop d3"></div>
                <div className="drop d4"></div>
                <div className="drop d5"></div>
                <div className="drop d6"></div>
                <div className="drop d7"></div>
                <div className="drop d8"></div>
                <div className="drop d9"></div>
                <div className="drop d10"></div>
                <div className="drop d11"></div>
                <div className="drop d12"></div>
                <div className="drop d13"></div>
                <div className="drop d14"></div>
                <div className="drop d15"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.img
            src={bigCloud}
            style={extraArtDesign}
            animate={{
              y: [-600, 0],
              scale: [0, 1]

            }}
            transition={{
              duration: 4,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut"
            }}
          />
          

          <motion.img
            src={smallDrop}
            style={smallSunDesign}
            animate={{
              y: [-300, 0],
              scale: [0, 1]
            }}
            transition={{
              duration: 2,
              delay: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut"
            }}
          />

          <motion.img
            src={smallDrop2}
            style={smallSunDesign2}
            animate={{
              y: [-300, 0],
              scale: [0, 1]

            }}
            transition={{
              delay: 2,
              duration: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut"
            }}
          />

        </div>
      )


    } else if (weatherId >= 600 && weatherId <= 622) {  
      document.body.style.backgroundColor = "#69ABEE";
      weather = "Snow";
      objectColor = "#000000"
      backgroudColor = "#69ABEE";
      moreInfoBackColor = "#B6DAFF";


      const extraArtDesign = {
        position: "absolute",
        margin: "auto",
        top: "-30vw",
        right: "0",
        bottom: "0",
        width: "12%",
        height: "auto",
        zIndex: "-1",
        marginRight: "6%",
      }
      const smallSunDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        right: "0",
        width: "20%",
        marginTop: "12%",
        marginRight: "10%",
      }
      const smallSunDesign2 = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        width: "12%",
        marginTop: "50%",
        marginLeft: "10%",
      }

      const snowBottom = {
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        marginRight: "auto",
        marginLeft: "auto",
      }

      extraArt = (
        <div>
          <div class="wrapper">
              <div class="snow layer1 a"></div>
              <div class="snow layer1"></div> 
              <div class="snow layer2 a"></div>
              <div class="snow layer2"></div>
              <div class="snow layer3 a"></div>
              <div class="snow layer3"></div>
          </div>

          <img src={snowGround} alt="artPart" style={snowBottom}></img>

          <motion.img
            src={bigSnow}
            style={extraArtDesign}
            animate={{
              y: [-400, 0],
              scale: [0.8, 1],
              rotate: [0, 360]

            }}
            transition={{
              duration: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />

          <motion.img
            src={smallSnow}
            style={smallSunDesign}
            animate={{
              y: [-300, 0],
              scale: [0.8, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              delay: 2.5,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />

          <motion.img
            src={smallSnow2}
            style={smallSunDesign2}
            animate={{
              y: [-300, 0],
              scale: [0.8, 1],
              rotate: [0, 360]

            }}
            transition={{
              delay: 2,
              duration: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}
          />

        </div>
      )


    } else if (weatherId >= 701 && weatherId <= 800) {
      document.body.style.backgroundColor = "#EAC793";

      weather = "Clear";
      objectColor = "#000000"
      backgroudColor = "#FCAF3B";
      moreInfoBackColor = "#F9E9D0";

      const extraArtDesign = {
        position: "fixed",
        bottom: "100px",
        left: "0",
        right: "0",
        width: "95%",
        marginRight: "auto",
        marginLeft: "auto",
        zIndex: "-1",
      }
      const smallSunDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        right: "0",
        width: "20%",
        marginTop: "6%",
        marginRight: "10%",
        zIndex: "-2",
      }
      const smallSunDesign2 = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        width: "20%",
        marginTop: "12%",
        marginLeft: "10%",
        zIndex: "-2",
      }
      
      
      extraArt = (
        <div>
    
          <motion.img
            src={bigSun}
            style={extraArtDesign}
            animate={{
              y: [300, 0],
              scale: [0, 1]

            }}
            transition={{
              duration: 2,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut"
            }}
          />
        </div>
      )

    } else if (weatherId >= 801 && weatherId <= 804) {
      document.body.style.backgroundColor = "#054A91";
      weather = "Clouds";
      objectColor = "#ffffff"
      backgroudColor = "#054A91";
      moreInfoBackColor = "#91BDEB";




      const extraArtDesign = {
        position: "absolute",
        margin: "auto",
        top: "10%",
        left: "0",
        right: "0",
        bottom: "0",
        width: "90%",
        height: "auto",
        zIndex: "-1",
      }
      const smallSunDesign = {
        position: "absolute",
        margin: "auto",
        top: "0",
        right: "0",
        width: "20%",
        marginTop: "12%",
        marginRight: "10%",
      }
      const smallSunDesign2 = {
        position: "absolute",
        margin: "auto",
        top: "0",
        left: "0",
        width: "20%",
        marginTop: "18%",
        marginLeft: "10%",
      }

      const smallCloudDesign = (
        <img src={smallCloud} style={{position: "absolute"}}></img>
      )

      
      extraArt = (
        <div>

          <motion.img
            src={"./assets/cloudy/bigCloud.png"}
            style={extraArtDesign}
            animate={{
              y: [300, 0],
              scale: [0, 1]

            }}
            transition={{
              duration: 3,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeInOut",
              type: "spring"
            }}

            
          />

    

          <motion.img
            src={smallCloud2}
            style={smallSunDesign2}
            animate={{
              x: [-200, 0],

            }}
            transition={{
              delay: 2,
              duration: 1,
              //repeatType: 'reverse',
              //repeat: Infinity,
              smooth: true,
              ease: "easeOut",
              type: "spring"
            }}
          />


        </div>
      )

    }



  } else {

    weather = "loading";
    wind = "loading";
    humidity = "loading";
    weatherId = "loading";
    description = "loading";


  }


  console.log("screenTooBig: " + screenTooBig);

  if (screenTooBig === true) {
    return (
      <div className='bigBox'>
        <div class="animation_loading">
          <span class="loader"></span>
          <div class="looking_outside">Your screen is too big!</div>
          <span class="loaderBar"></span>
        </div>
      </div>
    )
  } else {
    if (isLoading) {
      return (
        <div className='bigBox'>
          <div class="animation_loading">
            <span class="loader"></span>
            <div class="looking_outside">Please give us access to your location so we can provide the best results!</div>
            <span class="loaderBar"></span>
          </div>
        </div>
        
      );
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  
  


  //const objectsColors=[objectColor, locationMain, backgroudColor];

  //const result = LineChart("Alice");

  const extraArtDesign = {
    position: "absolute",
    margin: "auto",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "95%",
    height: "auto",
    zIndex: "-1",
  }

  if (screenTooBig === true) {
    return (
      <div className='bigBox'>
        <div class="animation_loading">
          <span class="loader"></span>
          <div class="looking_outside">Your screen is too big!</div>
          <span class="loaderBar"></span>
        </div>
      </div>
    )
  } else {

    if (userHasGiven === false) {
      if (locationMain === undefined || locationMain === "" || locationMain === "Couldn't find location") {
        return (
          <div className='bigBox'>
            <div class="animation_loading">
              <span class="loader"></span>
              <div class="looking_outside">Please give us access to your location so we can provide the best results!</div>
            </div>
            
          </div>
        );
      } else {

        if (data === null || data === "") {
          return (
            <div className='bigBox'>
              <div class="animation_loading">
                <span class="loader"></span>
                <div class="looking_outside">Please give us access to your location so we can provide the best results!</div>
              </div>
              
            </div>
          );
        } else {


          return (
            <div className='wholePage'>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
              {MyComponent(data, weather, wind, humidity, objectColor, description, weatherId, locationMain)}
              {<LineChart objectsColors={[objectColor, locationMain, backgroudColor, moreInfoBackColor]}/>}
              {extraArt}
            </div>
          );

        }
      }
    } else {
      if (locationMain === undefined || locationMain === "" || locationMain === "Couldn't find location") {
        return (
          <div className='bigBox'>
            <div class="animation_loading">
              <span class="loader"></span>
              <div class="looking_outside">Please give us access to your location so we can provide the best results!</div>
            </div>
            {/* {latitudeMain} */}
            {/* {longitudeMain} */}
            
          </div>
        );
      } else {

        if (data === null || data === "") {
          return (
            <div className='bigBox'>
              <div class="animation_loading">
                <span class="loader"></span>
                <div class="looking_outside">Looking outside...</div>
              </div>
              
            </div>
          );
        } else {


          return (
            <div className='wholePage'>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
              {MyComponent(data, weather, wind, humidity, objectColor, description, weatherId, locationMain)}
              {<LineChart objectsColors={[objectColor, locationMain, backgroudColor, moreInfoBackColor]}/>}
              {extraArt}
              {/* {latitudeMain} */}
              {/* {longitudeMain} */}
            </div>
          );
        }
      }
    }
  }
}

export default App;