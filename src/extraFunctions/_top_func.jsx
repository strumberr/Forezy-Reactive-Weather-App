// import '@/styles/TopFunc.css';
import React, { useState, useEffect } from 'react';

const openWeatherMapApi = process.env.NEXT_PUBLIC_OWM_API_KEY;



export function MyComponent(jsonData, weather, wind, humidity, objectsColors, description, weatherId, locationMain) {
  

  


  const json_string = JSON.stringify(jsonData, null, 2);
  const jsonObject = JSON.parse(json_string);



  var temp;

  if (jsonObject && jsonObject.main) {
    var temp = jsonObject.main.temp;

  } else {

    var temp = "loading";
  }

  const parsedTemp = parseFloat(temp);
  const roundedTemp = Math.round(parsedTemp);

  const parsedWind = parseFloat(wind);
  const roundedWind = Math.round(parsedWind);
  var wordedWind;

  if (roundedWind < 5) {
    wordedWind = "Light Winds";
  } else if (roundedWind < 11) {
    wordedWind = "Light Breeze";
  } else if (roundedWind < 19) {
    wordedWind = "Gentle Breeze";
  } else if (roundedWind < 28) {
    wordedWind = "Small Breeze";
  } else if (roundedWind < 38) {
    wordedWind = "Fresh Breeze";
  } else if (roundedWind < 49) {
    wordedWind = "Strong Breeze";
  } else if (roundedWind < 61) {
    wordedWind = "High Wind";
  } else if (roundedWind < 74) {
    wordedWind = "Gale";
  } else if (roundedWind < 88) {
    wordedWind = "Strong Gale";
  } else if (roundedWind < 102) {
    wordedWind = "Storm";
  } else if (roundedWind < 117) {
    wordedWind = "Violent Storm";
  } else {
    wordedWind = "Hurricane";
  }


  const objectColor = {
    color: objectsColors,
  };

  const objectBorderColor = {
    borderColor: objectsColors,
  };




  return (
    <div className='everythingTop' style={objectColor}>
      <div className='locationCondition'>{locationMain}</div>
      <div className='weatherCondition' >{weather}</div>
      <div className='temperature'>{roundedTemp}<div className='degrees'>°</div></div>
      <div className='weatherDescription'>{description}</div>
      <div className='twoBoxes'>
        <div className='boxLeft' style={objectBorderColor}>
          <span className="material-symbols-outlined">
          air
          </span>
          <div className='windSpeed'>{wordedWind}</div>
          

        </div>
        <div className='boxRight' style={objectBorderColor}>
          <span className="material-symbols-outlined">
          humidity_low
          </span>
          <div className='humidity'>{humidity}%</div>
        </div>
      </div>
    </div>
  );
}