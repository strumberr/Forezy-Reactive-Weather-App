import React, { useState, useEffect, useRef } from "react";
// import '@/styles/graphHours.css';
// import '@/styles/test.scss';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { iconsList } from "./_animationsMain.jsx"

const visualCrossingApKeys = [process.env.NEXT_PUBLIC_VAPI_KEY1, process.env.NEXT_PUBLIC_VAPI_KEY2, process.env.NEXT_PUBLIC_VAPI_KEY3];

const randomVisualCrossingApKeys = visualCrossingApKeys[Math.floor(Math.random() * visualCrossingApKeys.length)];

const openWeatherMapApi = process.env.NEXT_PUBLIC_OWM_API_KEY;


function WeatherApi(addressLoc) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  


  useEffect(() => {
      const fetchData = async () => {
      setIsLoading(true);

      try {
          const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${addressLoc}?unitGroup=metric&key=${randomVisualCrossingApKeys}&contentType=json`);
          const jsonData = await response.json();
          setData(jsonData);
          setIsLoading(false);


      } catch (error) {
          setError(error);
          setIsLoading(false);

      }
      };

      fetchData();
  }, []);



  const json_string = JSON.stringify(data, null, 2);
  

  const jsonObject = JSON.parse(json_string);



  //get current time in hours
  var date = new Date();
  var hours = date.getHours();



  var hoursTempX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3];
  var hoursTempXGraphVer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  var hoursTempActualY = [];
  var tempMax7 = [];
  var tempMin7 = [];
  var days = [];
  var iconArray = [];

  var detailsSpecHour = [];



  if (jsonObject && jsonObject.days) {

      //for loop until 23 hours
      for (var i = 0; i < 24; i++) {
          //var hoursTempSingle = jsonObject.days[0].hours[i].datetime;
          var hoursTemp = jsonObject.days[0].hours[i].temp;
          //round the temp to a whole number
          var parsedHoursTemp = parseFloat(hoursTemp);
          var roundedHoursTemp = Math.round(parsedHoursTemp);
          //hoursTempX.push(hoursTempSingle);
          hoursTempActualY.push(roundedHoursTemp);
          //for every hour get hours - feelslike
          var hoursFeelsLike = jsonObject.days[0].hours[i].precipprob;
          var condition = jsonObject.days[0].hours[i].conditions;
          var icon = jsonObject.days[0].hours[i].icon;
          var humidity = Math.round(jsonObject.days[0].hours[i].humidity);
          var uvindex = jsonObject.days[0].hours[i].uvindex;
          var visibility = jsonObject.days[0].hours[i].windspeed;
          detailsSpecHour.push([hoursFeelsLike, condition, icon, humidity, uvindex, visibility]);
        

      }

      //for loop first 3 hours of the next day and push to hoursTempY
      for (var i = 0; i < 3; i++) {
          var hoursTemp = jsonObject.days[1].hours[i].temp;
          var parsedHoursTemp = parseFloat(hoursTemp);
          var roundedHoursTemp = Math.round(parsedHoursTemp);
          hoursTempActualY.push(roundedHoursTemp);

          var hoursFeelsLike = jsonObject.days[0].hours[i].feelslike;
          var condition = jsonObject.days[0].hours[i].conditions;
          var icon = jsonObject.days[0].hours[i].icon;
          var humidity = Math.round(jsonObject.days[0].hours[i].humidity);
          var uvindex = jsonObject.days[0].hours[i].uvindex;
          var visibility = jsonObject.days[0].hours[i].windspeed;
          detailsSpecHour.push([hoursFeelsLike, condition, icon, humidity, uvindex, visibility]);
      }

    


      for (var i = 1; i < 7; i++) {
          var tempMax = jsonObject.days[i].tempmax;
          var tempMin = jsonObject.days[i].tempmin;
          var day = jsonObject.days[i].datetime;
          var parsedTempMax = parseFloat(tempMax);
          var parsedTempMin = parseFloat(tempMin);
          var roundedTempMax = Math.round(parsedTempMax);
          var roundedTempMin = Math.round(parsedTempMin);
          var indIcon = jsonObject.days[i].icon;


          //indIcon = "clear-day"


          if (indIcon == "clear-day") {
            var svgIcon = (
              <svg version="1.1"
                  id="sunFill"
                  class="climacon climacon_sunFill"
                  viewBox="20 20 55 55">
                <g class="climacon_iconWrap climacon_iconWrap-sunFill">
                  <g class="climacon_componentWrap climacon_componentWrap-sun">
                    <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                            d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                            d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                            d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                            d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                            d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                            d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                            d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"/>
                      <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                            d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"/>
                    </g>
                    <g class="climacon_componentWrap climacon_componentWrap_sunBody">
                      <circle class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                              cx="50.034"
                              cy="50"
                              r="11.999"/>
                      <circle class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                              fill="#FFFFFF"
                              cx="50.034"
                              cy="50"
                              r="7.999"/>
                    </g>
                  </g>
                </g>
              </svg>
            );
          } else if (indIcon == "partly-cloudy-day") {
            var svgIcon = (
              <svg class="sun-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path class="sun-half" fill="#FFA902" d="M127.8,259.1c3.1-4.3,6.5-8.4,10-12.3c-6-11.2-9.4-24-9.4-37.7c0-44.1,35.7-79.8,79.8-79.8
                    c40,0,73.1,29.4,78.9,67.7c11.4,2.3,22.4,5.7,32.9,10.4c-0.4-29.2-12-56.6-32.7-77.3C266.1,109,238,97.4,208.2,97.4
                    c-29.9,0-57.9,11.6-79.1,32.8c-21.1,21.1-32.8,49.2-32.8,79.1c0,17.2,3.9,33.9,11.2,48.9c1.5-0.1,3-0.1,4.4-0.1
                    C117.3,258,122.6,258.4,127.8,259.1z" />
                <path class="cloud" fill="#FFFFFF" d="M 400 256 c -5.3 0 -10.6 0.4 -15.8 1.1 c -16.8 -22.8 -39 -40.5 -64.2 -51.7 c -10.5 -4.6 -21.5 -8.1 -32.9 -10.4 c -10.1 -2 -20.5 -3.1 -31.1 -3.1 c -45.8 0 -88.4 19.6 -118.2 52.9 c -3.5 3.9 -6.9 8 -10 12.3 c -5.2 -0.8 -10.5 -1.1 -15.8 -1.1 c -1.5 0 -3 0 -4.4 0.1 C 47.9 258.4 0 307.7 0 368 c 0 61.8 50.2 112 112 112 c 13.7 0 27.1 -2.5 39.7 -7.3 c 29 25.2 65.8 39.3 104.3 39.3 c 38.5 0 75.3 -14.1 104.3 -39.3 c 12.6 4.8 26 7.3 39.7 7.3 c 61.8 0 112 -50.2 112 -112 S 461.8 256 400 256 z z" />

                <path fill="#FFA902" class="ray ray-one" d="M16,224h32c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,224,16,224z" />
                <path fill="#FFA902" class="ray ray-two" d="M83.5,106.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6L83.5,60.9c-6.2-6.2-16.4-6.2-22.6,0
                    c-6.2,6.2-6.2,16.4,0,22.6L83.5,106.2z" />
                <path fill="#FFA902" class="ray ray-three" d="M208,64c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C192,56.8,199.2,64,208,64z" />
                <path fill="#FFA902" class="ray ray-four" d="M332.4,106.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0l-22.6,22.6
                    c-6.2,6.2-6.2,16.4,0,22.6S326.2,112.4,332.4,106.2z" />
                <path fill="#FFA902" class="ray ray-five" d="M352,208c0,8.8,7.2,16,16,16h32c8.8,0,16-7.2,16-16s-7.2-16-16-16h-32C359.2,192,352,199.2,352,208z" />
              </svg>
            )
          } else if (indIcon == "cloudy") {
            var svgIcon = (
              <svg class="windy-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <g class="cloud-wrap">
                <path class="cloud" d="M 417 166.1 c -24 -24.5 -57.1 -38.8 -91.7 -38.8 c -34.6 0 -67.7 14.2 -91.7 38.8 c -52.8 2.5 -95 46.2 -95 99.6 c 0 55 44.7 99.7 99.7 99.7 c 5.8 0 11.6 -0.5 17.3 -1.5 c 20.7 13.5 44.9 20.9 69.7 20.9 c 24.9 0 49.1 -7.3 69.8 -20.9 c 5.7 1 11.5 1.5 17.3 1.5 c 54.9 0 99.6 -44.7 99.6 -99.7 C 512 212.3 469.8 168.5 417 166.1 z z" />
                </g>
                <path class="wind-three" d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
                <path class="wind-two" d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
                <path class="wind-one" d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
              </svg>
            )
          } else if (indIcon == "rain") {
            var svgIcon = (
              <svg class="rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path fill="#4780BB" class="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
                <path fill="#4780BB" class="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
                <path fill="#4780BB" class="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
                <path d="M 400 64 c -5.3 0 -10.6 0.4 -15.8 1.1 C 354.3 24.4 307.2 0 256 0 s -98.3 24.4 -128.2 65.1 c -5.2 -0.8 -10.5 -1.1 -15.8 -1.1 C 50.2 64 0 114.2 0 176 s 50.2 112 112 112 c 13.7 0 27.1 -2.5 39.7 -7.3 c 29 25.2 65.8 39.3 104.3 39.3 c 38.5 0 75.3 -14.1 104.3 -39.3 c 12.6 4.8 26 7.3 39.7 7.3 c 61.8 0 112 -50.2 112 -112 S 461.8 64 400 64 z z" />
              </svg>
            )
          } else if (indIcon == "snow") {
            var svgIcon = (
              <svg class="snow-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path d="M512,176c0-61.8-50.2-112-112-112c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1
                c-5.2-0.8-10.5-1.1-15.8-1.1C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
                c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3C461.8,288,512,237.8,512,176z M354.1,241.3C330.6,269.6,295.6,288,256,288
                c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
                C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
                C382.9,256,367.1,250.5,354.1,241.3z" />

                <path class="snowflake-one" d="M131.8,349.9c-1.5-5.6-7.3-8.9-12.9-7.4l-11.9,3.2c-1.1-1.5-2.2-3-3.6-4.4c-1.4-1.4-2.9-2.6-4.5-3.6l3.2-11.9
                c1.5-5.6-1.8-11.4-7.4-12.9c-5.6-1.5-11.4,1.8-12.9,7.4l-3.2,12.1c-3.8,0.3-7.5,1.2-10.9,2.9l-8.8-8.8c-4.1-4.1-10.8-4.1-14.8,0
                c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8c-1.6,3.5-2.6,7.2-2.9,11l-12,3.2c-5.6,1.5-9,7.2-7.5,12.9c1.5,5.6,7.3,8.9,12.9,7.4l11.9-3.2
                c1.1,1.6,2.2,3.1,3.7,4.5c1.4,1.4,2.9,2.6,4.4,3.6l-3.2,11.9c-1.5,5.6,1.8,11.4,7.4,12.9c5.6,1.5,11.3-1.8,12.8-7.4l3.2-12
                c3.8-0.3,7.5-1.3,11-2.9l8.8,8.8c4.1,4.1,10.7,4,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-8.8-8.8c1.7-3.5,2.7-7.2,2.9-11l12.1-3.2
                C130,361.3,133.3,355.6,131.8,349.9z M88.6,371c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.8,0-14.8c4.1-4.1,10.8-4.1,14.9,0
                S92.6,366.9,88.6,371z" />
                  <path class="snowflake-two" d="M304.8,437.6l-12.6-7.2c0.4-2.2,0.7-4.4,0.7-6.7c0-2.3-0.3-4.5-0.7-6.7l12.6-7.2c5.9-3.4,7.9-11,4.5-16.8
                c-3.4-5.9-10.9-7.9-16.8-4.5l-12.7,7.3c-3.4-2.9-7.2-5.2-11.5-6.7v-14.6c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3V389
                c-4.3,1.5-8.1,3.8-11.5,6.7l-12.7-7.3c-5.9-3.4-13.5-1.4-16.9,4.5c-3.4,5.9-1.4,13.4,4.5,16.8l12.5,7.2c-0.4,2.2-0.7,4.4-0.7,6.7
                c0,2.3,0.3,4.5,0.7,6.7l-12.5,7.2c-5.9,3.4-7.9,11-4.5,16.9s10.9,7.9,16.8,4.5l12.7-7.3c3.4,2.9,7.2,5.1,11.5,6.7V473
                c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-14.6c4.3-1.5,8.2-3.8,11.5-6.7l12.7,7.3c5.9,3.4,13.4,1.4,16.8-4.5
                C312.8,448.6,310.7,441.1,304.8,437.6z M256,436c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3s12.3,5.5,12.3,12.3
                C268.3,430.5,262.8,436,256,436z" />
                  <path class="snowflake-three" d="M474.2,396.2l-12.1-3.2c-0.3-3.8-1.2-7.5-2.9-11l8.8-8.8c4.1-4.1,4.1-10.8,0-14.9c-4.1-4.1-10.7-4.1-14.8,0
                l-8.8,8.8c-3.5-1.6-7.1-2.6-11-2.9l-3.2-12.1c-1.5-5.6-7.2-8.9-12.9-7.4c-5.6,1.5-8.9,7.3-7.4,12.9l3.2,11.9
                c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.5,2.9-3.6,4.5l-11.9-3.2c-5.6-1.5-11.4,1.9-12.9,7.4c-1.5,5.6,1.9,11.4,7.4,12.9l12,3.2
                c0.3,3.8,1.3,7.5,3,11l-8.8,8.8c-4.1,4.1-4.1,10.7,0,14.8c4.1,4.1,10.7,4.1,14.8,0l8.8-8.8c3.5,1.7,7.2,2.7,11,3l3.2,12
                c1.5,5.6,7.2,8.9,12.9,7.4c5.6-1.5,9-7.2,7.5-12.9l-3.2-11.9c1.5-1.1,3-2.2,4.5-3.6c1.4-1.4,2.5-2.9,3.6-4.5l11.9,3.2
                c5.6,1.5,11.4-1.9,12.9-7.4C483.1,403.5,479.8,397.8,474.2,396.2z M438.3,402.9c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.7,0-14.9
                c4.1-4.1,10.8-4.1,14.9,0C442.4,392.2,442.4,398.9,438.3,402.9z" />
              </svg>
            )
          } else if (indIcon == "sleet") {
            var svgIcon = (
              <svg xmlns="http://www.w3.org/2000/svg" className="iconWeather"  fill="currentColor" class="bi bi-cloud-sleet" viewBox="0 0 16 16">
                <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223z"/>
              </svg>
            )
          } else if (indIcon == "hail") {
            var svgIcon = (
              <svg class="snow-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path d="M512,176c0-61.8-50.2-112-112-112c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1
                c-5.2-0.8-10.5-1.1-15.8-1.1C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
                c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3C461.8,288,512,237.8,512,176z M354.1,241.3C330.6,269.6,295.6,288,256,288
                c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
                C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
                C382.9,256,367.1,250.5,354.1,241.3z" />

                <path class="snowflake-one" d="M131.8,349.9c-1.5-5.6-7.3-8.9-12.9-7.4l-11.9,3.2c-1.1-1.5-2.2-3-3.6-4.4c-1.4-1.4-2.9-2.6-4.5-3.6l3.2-11.9
                c1.5-5.6-1.8-11.4-7.4-12.9c-5.6-1.5-11.4,1.8-12.9,7.4l-3.2,12.1c-3.8,0.3-7.5,1.2-10.9,2.9l-8.8-8.8c-4.1-4.1-10.8-4.1-14.8,0
                c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8c-1.6,3.5-2.6,7.2-2.9,11l-12,3.2c-5.6,1.5-9,7.2-7.5,12.9c1.5,5.6,7.3,8.9,12.9,7.4l11.9-3.2
                c1.1,1.6,2.2,3.1,3.7,4.5c1.4,1.4,2.9,2.6,4.4,3.6l-3.2,11.9c-1.5,5.6,1.8,11.4,7.4,12.9c5.6,1.5,11.3-1.8,12.8-7.4l3.2-12
                c3.8-0.3,7.5-1.3,11-2.9l8.8,8.8c4.1,4.1,10.7,4,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-8.8-8.8c1.7-3.5,2.7-7.2,2.9-11l12.1-3.2
                C130,361.3,133.3,355.6,131.8,349.9z M88.6,371c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.8,0-14.8c4.1-4.1,10.8-4.1,14.9,0
                S92.6,366.9,88.6,371z" />
                  <path class="snowflake-two" d="M304.8,437.6l-12.6-7.2c0.4-2.2,0.7-4.4,0.7-6.7c0-2.3-0.3-4.5-0.7-6.7l12.6-7.2c5.9-3.4,7.9-11,4.5-16.8
                c-3.4-5.9-10.9-7.9-16.8-4.5l-12.7,7.3c-3.4-2.9-7.2-5.2-11.5-6.7v-14.6c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3V389
                c-4.3,1.5-8.1,3.8-11.5,6.7l-12.7-7.3c-5.9-3.4-13.5-1.4-16.9,4.5c-3.4,5.9-1.4,13.4,4.5,16.8l12.5,7.2c-0.4,2.2-0.7,4.4-0.7,6.7
                c0,2.3,0.3,4.5,0.7,6.7l-12.5,7.2c-5.9,3.4-7.9,11-4.5,16.9s10.9,7.9,16.8,4.5l12.7-7.3c3.4,2.9,7.2,5.1,11.5,6.7V473
                c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-14.6c4.3-1.5,8.2-3.8,11.5-6.7l12.7,7.3c5.9,3.4,13.4,1.4,16.8-4.5
                C312.8,448.6,310.7,441.1,304.8,437.6z M256,436c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3s12.3,5.5,12.3,12.3
                C268.3,430.5,262.8,436,256,436z" />
                  <path class="snowflake-three" d="M474.2,396.2l-12.1-3.2c-0.3-3.8-1.2-7.5-2.9-11l8.8-8.8c4.1-4.1,4.1-10.8,0-14.9c-4.1-4.1-10.7-4.1-14.8,0
                l-8.8,8.8c-3.5-1.6-7.1-2.6-11-2.9l-3.2-12.1c-1.5-5.6-7.2-8.9-12.9-7.4c-5.6,1.5-8.9,7.3-7.4,12.9l3.2,11.9
                c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.5,2.9-3.6,4.5l-11.9-3.2c-5.6-1.5-11.4,1.9-12.9,7.4c-1.5,5.6,1.9,11.4,7.4,12.9l12,3.2
                c0.3,3.8,1.3,7.5,3,11l-8.8,8.8c-4.1,4.1-4.1,10.7,0,14.8c4.1,4.1,10.7,4.1,14.8,0l8.8-8.8c3.5,1.7,7.2,2.7,11,3l3.2,12
                c1.5,5.6,7.2,8.9,12.9,7.4c5.6-1.5,9-7.2,7.5-12.9l-3.2-11.9c1.5-1.1,3-2.2,4.5-3.6c1.4-1.4,2.5-2.9,3.6-4.5l11.9,3.2
                c5.6,1.5,11.4-1.9,12.9-7.4C483.1,403.5,479.8,397.8,474.2,396.2z M438.3,402.9c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.7,0-14.9
                c4.1-4.1,10.8-4.1,14.9,0C442.4,392.2,442.4,398.9,438.3,402.9z" />
              </svg>
            )
          } else if (indIcon == "thunderstorm") {
            var svgIcon = (
              <svg class="thunder-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
                C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c12.3,10.7,26.2,19,40.9,25.4l24.9-24.9
                c-23.5-7.6-44.2-21.3-59.6-39.9c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
                C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
                c-17.1,0-32.9-5.5-45.9-14.7c-10.4,12.5-23.3,22.7-37.6,30.6L303,312.2c20.9-6.6,40.5-16.9,57.3-31.6c12.6,4.8,26,7.3,39.7,7.3
                c61.8,0,112-50.2,112-112S461.8,64,400,64z" />
                <polygon class="bolt" points="192,352 224,384 192,480 288,384 256,352 288,256 " />
              </svg>
            )
          } else if (indIcon == "wind") {
            var svgIcon = (
              <svg class="windy-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <g class="cloud-wrap">
                <path class="cloud" d="M417,166.1c-24-24.5-57.1-38.8-91.7-38.8c-34.6,0-67.7,14.2-91.7,38.8c-52.8,2.5-95,46.2-95,99.6
                c0,55,44.7,99.7,99.7,99.7c5.8,0,11.6-0.5,17.3-1.5c20.7,13.5,44.9,20.9,69.7,20.9c24.9,0,49.1-7.3,69.8-20.9
                c5.7,1,11.5,1.5,17.3,1.5c54.9,0,99.6-44.7,99.6-99.7C512,212.3,469.8,168.5,417,166.1z M412.4,333.3c-8.3,0-16.4-1.5-24-4.4
                c-17.5,15.2-39.8,23.8-63.1,23.8c-23.2,0-45.5-8.5-63-23.8c-7.6,2.9-15.8,4.4-24,4.4c-37.3,0-67.7-30.4-67.7-67.7
                c0-37.3,30.4-67.7,67.7-67.7c3.2,0,6.4,0.2,9.5,0.7c18.1-24.6,46.5-39.4,77.5-39.4c30.9,0,59.4,14.8,77.5,39.4
                c3.1-0.5,6.3-0.7,9.6-0.7c37.3,0,67.6,30.4,67.6,67.7C480,303,449.7,333.3,412.4,333.3z" />
                </g>
                <path class="wind-three" d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
                <path class="wind-two" d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
                <path class="wind-one" d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
              </svg>
            )
          } else if (indIcon == "fog") {
            var svgIcon = (
              <svg xmlns="http://www.w3.org/2000/svg" className="iconWeather" width="16" height="16" fill="currentColor" class="bi bi-cloud-fog" viewBox="0 0 16 16">
                <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z"/>
              </svg>
            )
          }



          tempMax7.push(roundedTempMax);
          tempMin7.push(roundedTempMin);
          days.push(day);
          iconArray.push(svgIcon)

      }


  } 


  const now = new Date();
  const currentHour = now.getHours();

  //find where currentHour is in hoursTempX array, and get the 3 hours before and after and the current hour included and save it in a new array
  const index = hoursTempX.indexOf(currentHour);
  const shortenedTimeHoursX = hoursTempX.slice(index - 0, index + 7);

  

  //do the same for this array: hoursTempXGraphVer
  const hoursTempXGraphVer2 = hoursTempXGraphVer.slice(index - 0, index + 7);


  //do the same to detailsSpecHour
  const detailsSpecHour2 = detailsSpecHour.slice(index - 0, index + 7);


  //do the same for the actual temperature
  const shortenedTimeHoursActualY = hoursTempActualY.slice(index - 0, index + 7);




  return [shortenedTimeHoursX, shortenedTimeHoursActualY, tempMax7, tempMin7, days, iconArray, hoursTempXGraphVer2, detailsSpecHour2];
} 






export function LineChart(objectsColors) {
  const [hoursTempX, hoursTempActualY, tempMax7, tempMin7, days, iconArray, hoursTempXGraphVer, detailsSpecHour2] = WeatherApi(objectsColors.objectsColors[1]);
  const chartContainer = useRef(null);

  const [loadingThing, setLoadingThing] = useState()



  const x = hoursTempXGraphVer;
  const y = hoursTempActualY;
  const xMin = Math.min(...x);
  const xMax = Math.max(...x);
  const yMin = Math.min(...y);
  const yMax = Math.max(...y);
  const xScale = (day) => ((day - xMin) / (xMax - xMin)) * 300 + 50; // adjust the scaling factor here
  const yScale = (temperature) => ((yMax - temperature) / (yMax - yMin)) * 50 + 50; // adjust the scaling factor here

  const lineData = x.map((day, i) => ({
    x: xScale(day),
    y: yScale(y[i]),
  }));

  const pathData = lineData.reduce(
    (acc, d, i, arr) => {
      if (i === 0) {
        return `M ${d.x},${d.y}`;
      } else {
        const prev = arr[i - 1];
        const dx = d.x - prev.x;
        const dy = d.y - prev.y;
        const d1 = `C ${prev.x + dx / 3},${prev.y} ${d.x - dx / 3},${d.y} ${d.x},${d.y}`;
        const d2 = i === arr.length - 1 ? '' : `L ${d.x},${d.y}`;
        return `${acc} ${d1} ${d2}`;
      }
    },
    ''
  );

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
    <div key={index} className="tempBox">
        <div className="dayString">
          <div>{dayList[index]}</div>
        </div>

        <div className="iconWeather">{iconArray[index]}</div>

        <div className="tempArrow">

          <div className="arrows">
            <svg className="arrowUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"/></svg>
            <svg className="arrowsDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L54.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>
          </div>

          <div>
              <div className="maxTemp">{maxTemp}°</div>
              <div className="minTemp">{tempMin7[index]}°</div>
          </div>

          
        </div>
    </div>

      
  ));
  



  const [rangeval, setRangeval] = useState(null);
  const [showElement, setShowElement] = useState(false);

  const handleSliderTouchStart = (event) => {
    const sliderRect = event.target.getBoundingClientRect();
    const clickX = event.touches[0].clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;
    const newValue = Math.round((clickX / sliderWidth) * 6);
    setRangeval(newValue);
    setShowElement(true);
  };

  const handleSliderTouchMove = (event) => {
    const sliderRect = event.target.getBoundingClientRect();
    const touchX = event.touches[0].clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;
    const newValue = Math.round((touchX / sliderWidth) * 6);
    setRangeval(newValue);
  };

  const handleSliderTouchEnd = () => {
    setShowElement(false);
  };

  const hour1 = hoursTempX[0]
  const hour2 = hoursTempX[1]
  const hour3 = hoursTempX[2]
  const hour4 = hoursTempX[3]
  const hour5 = hoursTempX[4]
  const hour6 = hoursTempX[5]
  const hour7 = hoursTempX[6]

  var icon1;
  var icon2;
  var icon3;
  var icon4;
  var icon5;
  var icon6;
  var icon7;

  try {
    icon1 = detailsSpecHour2[0][2]
    icon2 = detailsSpecHour2[1][2]
    icon3 = detailsSpecHour2[2][2]
    icon4 = detailsSpecHour2[3][2]
    icon5 = detailsSpecHour2[4][2]
    icon6 = detailsSpecHour2[5][2]
    icon7 = detailsSpecHour2[6][2]
  } catch (error) {

  }



  



  const moreInfo = (
    <div>
      
      <input
        type="range"
        className="custom-range"
        min="0"
        max="6"
        value={rangeval}
        onTouchStart={handleSliderTouchStart}
        onTouchMove={handleSliderTouchMove}
        onTouchEnd={handleSliderTouchEnd}
        style={{
          opacity: showElement ? 1 : 0,
        }}
      />  


      {showElement && (
        <div>
          {rangeval === 0 && (
            
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour1}:00</div> 
                    
                    

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[0][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[0][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[0][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[0][4] >= 0 && detailsSpecHour2[0][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[0][4] >= 3 && detailsSpecHour2[0][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[0][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[0][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 1 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour2}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[1][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[1][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[1][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[1][4] >= 0 && detailsSpecHour2[1][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[1][4] >= 3 && detailsSpecHour2[1][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[1][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[1][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 2 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour3}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[2][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[2][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[2][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[2][4] >= 0 && detailsSpecHour2[2][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[2][4] >= 3 && detailsSpecHour2[2][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[2][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[2][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 3 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour4}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[3][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[3][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[3][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[3][4] >= 0 && detailsSpecHour2[3][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[3][4] >= 3 && detailsSpecHour2[3][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[3][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[3][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 4 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour5}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[4][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[4][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[4][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[4][4] >= 0 && detailsSpecHour2[4][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[4][4] >= 3 && detailsSpecHour2[4][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[4][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[4][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 5 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour6}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[5][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[5][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[5][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[5][4] >= 0 && detailsSpecHour2[5][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[5][4] >= 3 && detailsSpecHour2[5][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[5][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[5][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rangeval === 6 && (
            <div className="detailed_weather_hover" style={{backgroundColor: objectsColors.objectsColors[3] }}>
              <div className="detailed_weather_hover_second_box">
                <div className="detailed_weather_hover_third_box">
                  <div className="detailed_weather_hover_forth_box">
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1, fontSize: "4vw" }} className="title_boxes">Time</div>
                    <div style={{ fontSize: "6vw" }} className="subtitle_boxes">{hour7}:00</div> 

                  </div>

                  <div className="detailed_weather_hover_fifth_box">
                    <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Rain Prob.</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[6][0]}%</div>
                      </div>
                    </div>

                    <div className="detailed_weather_hover_seventh_box" style={{justifyContent: "flex-start"}}>
                      <div>
                        <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Condition</div>
                        <div className="subtitle_boxes">{detailsSpecHour2[6][1]}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detailed_weather_hover_eighth_box">
                  <div className="detailed_weather_hover_sixth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Humidity</div>
                      <div className="subtitle_boxes">{detailsSpecHour2[6][3]}%</div>
                    </div>
                  </div>

                  <div className="detailed_weather_hover_ninth_box" style={{justifyContent: "flex-start"}}>
                    <div>
                      <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">UV Index</div>
                      {detailsSpecHour2[6][4] >= 0 && detailsSpecHour2[6][4] <= 2 && <div className="subtitle_boxes">No need for sunscreen!</div>}
                      {detailsSpecHour2[6][4] >= 3 && detailsSpecHour2[6][4] <= 7 && <div className="subtitle_boxes">Sunscreen, maybe?</div>}
                      {detailsSpecHour2[6][4] >= 8 && <div className="subtitle_boxes">Sun screen is a must!</div>}
                    </div>
                  </div>

                </div>
              </div>
              <div className="detailed_weather_hover_second_box2">
                <div className="detailed_weather_hover_second_box3">
                  <div className="iconWeatherTwo">{iconsList(icon1)}</div>
                </div>

                <div className="detailed_weather_hover_second_box4">
                  <div>
                    <div style={{ color: objectsColors.objectsColors[2], opacity: 1 }} className="title_boxes">Wind</div>
                    <div className="subtitle_boxes">{detailsSpecHour2[6][5]} Km/h</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}


    

    </div>
  );





  const now = new Date();
  const currentHour = now.getHours();

  //find the current hour in the array and replace it with the word "Now"
  const index = hoursTempX.indexOf(currentHour);
  if (index > -1) {
    hoursTempX[index] = "Now";
  }


  //display hoursTempActualY in a list of divs
  const temperatureList = hoursTempActualY.map((temp, index) => (
    <div key={index} className="tempDigits">
      <div>{temp}°</div>
    </div>
  ));

  //display hoursTempX in a list of divs
  const hoursList = hoursTempX.map((hour, index) => (
    <div key={index} className="tempDigits">
      {hour === "Now" ? <div style={{backgroundColor: objectsColors.objectsColors[0]}} className="now"></div> : null}
      <div className="nowText" >{hour}</div>
    </div>
  ));







  

 

  

  return (
    <div className="graphGroup">
      {moreInfo}
      <div className="tempDigitsWrapper" style={{color: objectsColors.objectsColors[0], marginBottom: "-4vw"}}>
        {temperatureList}
      </div>
      <svg width="100vw" height="200px" className="pathGraph">
        <path d={pathData} stroke={objectsColors.objectsColors[0]} fill="none" strokeWidth="4px"/>
        {x.map((day) => (
          <line
            key={day}
            x1={xScale(day)}
            x2={xScale(day)}
            stroke={objectsColors.objectsColors[0]}
          />
        ))}
      </svg>
      <div className="tempDigitsWrapper" style={{color: objectsColors.objectsColors[0], marginBottom: "20px", marginTop: "-20vw"}}>
        {hoursList}
      </div>
      <div className="wholeNewPage">
          <div className="scroller">
              <div className="futuresTemp">
                  {weatherList}
              </div>
          </div>
      </div>
    </div>
  );
}