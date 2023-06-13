import React, { useState, useEffect } from 'react';

const openWeatherMapApi = process.env.REACT_APP_OWM_API_KEY;


export function FetchDataMain(addressMain) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    var weather;
    var wind;
    var humidity;
    var weatherId;
    var description;
    var weatherSecondary;
    var objectColor;
    var extraArt;
    var addressGreat;

    
    fetch(`/api/api5?tempAddress=${addressMain}`)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data[0];

            fetch(`/api/api1?tempLat=${lat}&tempLon=${lon}`)
                .then (response => response.json())
                .then(data => {
                    
                    

                    const addressGreat = addressMain;





                    
                
                    return {
                        "weather": weather,
                        "wind": wind,
                        "humidity": humidity,
                        "weatherId": weatherId,
                        "description": description,
                        "objectColor": objectColor,
                        "extraArt": extraArt,
                        "addressGreat": addressGreat,
                        "data": data
                    }


                })
                return {
                    "weather": weather,
                    "wind": wind,
                    "humidity": humidity,
                    "weatherId": weatherId,
                    "description": description,
                    "objectColor": objectColor,
                    "extraArt": extraArt,
                    "addressGreat": addressGreat,
                    "data": data
                }
            
            



        })

        .catch(error => {
            console.error('Error:', error);
        });



        return {
            "weather": weather,
            "wind": wind,
            "humidity": humidity,
            "weatherId": weatherId,
            "description": description,
            "objectColor": objectColor,
            "extraArt": extraArt,
            "addressGreat": addressGreat,
            "data": data
        }
    
    

  }
  








function GetLatLonMain(address) {
    const [data, setData] = useState(null);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`/api/api5?tempAddress=${address}`)
            .then(response => response.json())
            .then(data => {
                const { lat, lon } = data[0];
                
                resolve({
                    "lat": lat,
                    "lon": lon
                });
            })
            

        }, 1000);

    });
    
}





export function FetchDataWithDelay(delayTime, address) {
    const [data, setData] = useState(null);

    var lat;
    var lon;

    GetLatLonMain(address)
        .then(data => {
            lat = data.lat;
            lon = data.lon;
        })

    return new Promise((resolve, reject) => {

        setTimeout(() => {
        
            fetch(`/api/api1?tempLat=${lat}&tempLon=${lon}`)
                .then(response => response.json())
                .then(data => resolve(data))

            .catch(error => reject(error));
        }, delayTime);
    });
}


