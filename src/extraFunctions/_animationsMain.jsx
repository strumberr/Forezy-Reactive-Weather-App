import { motion } from "framer-motion"
import React, { useState, useEffect, Component, useRef } from 'react';
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
    snowGround
} from '/public/_images.jsx';




export function snowAnimation() {
    return (
        <div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
        </div>
    )
}



export function htmlChinkOfCode(weather, wind, humidity, weatherId, description) {

    var weather;
    var wind;
    var humidity;
    var weatherId;
    var description;
    var weatherSecondary;
    var backgroudColor;

    var objectColor;
    var extraArt;


    if (weatherId >= 200 && weatherId <= 232) {
        document.body.style.backgroundColor = "#1B1B1B";
        weather = "Thunderstorm";
        objectColor = "#ffffff"
        backgroudColor = "#1B1B1B";

        if (description.includes("rain")) {
            weatherSecondary = "Rain";
        }

        return [weather, objectColor, backgroudColor, weatherSecondary]

    } else if (weatherId >= 300 && weatherId <= 321) {
        document.body.style.backgroundColor = "#1B1B1B";
        weather = "Drizzle";
        objectColor = "#ffffff"
        backgroudColor = "#1B1B1B";

        return [weather, objectColor, backgroudColor, weatherSecondary]

    } else if (weatherId >= 500 && weatherId <= 531) {
        document.body.style.backgroundColor = "#054A91";
        weather = "Rain";
        objectColor = "#ffffff"
        backgroudColor = "#054A91";


        const extraArtDesign = {
            position: "absolute",
            margin: "auto",
            top: "40vw",
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
        extraArt = (
            <div>

                <motion.img
                    src={bigDrop}
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

        return [weather, objectColor, backgroudColor, weatherSecondary]


    } else if (weatherId >= 600 && weatherId <= 622) {
        document.body.style.backgroundColor = "#69ABEE";
        weather = "Snow";
        objectColor = "#000000"
        backgroudColor = "#69ABEE";


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
                        duration: 4,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
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
                        delay: 2,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
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
                        ease: "easeInOut"
                    }}
                />

            </div>
        )


    } else if (weatherId >= 701 && weatherId <= 800) {
        document.body.style.backgroundColor = "#EAC793";
        console.log("backgroud color: " + "#EAC793");
        weather = "Clear";
        objectColor = "#000000"
        backgroudColor = "#FCAF3B";

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
                        duration: 4,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
                    }}
                />

                <motion.img
                    src={smallSun}
                    style={smallSunDesign}
                    animate={{
                        y: [300, 0],
                        scale: [0, 1]
                    }}
                    transition={{
                        duration: 4,
                        delay: 3.5,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
                    }}
                />

                <motion.img
                    src={smallSun2}
                    style={smallSunDesign2}
                    animate={{
                        y: [300, 0],
                        scale: [0, 1]

                    }}
                    transition={{
                        delay: 4,
                        duration: 3.5,
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
        extraArt = (
            <div>

                <motion.img
                    src={bigCloud}
                    style={extraArtDesign}
                    animate={{
                        y: [300, 0],
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
                    src={smallCloud}
                    style={smallSunDesign}
                    animate={{
                        x: [200, 0],
                    }}
                    transition={{
                        duration: 3,
                        delay: 2,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
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
                        duration: 3,
                        //repeatType: 'reverse',
                        //repeat: Infinity,
                        smooth: true,
                        ease: "easeInOut"
                    }}
                />


            </div>
        )

    }



}






























export function iconsList(indIcon) {
    
    console.log("iconPens: " + indIcon);

    var svgIcon = <div>beens</div>;

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
                                d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                                d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                                d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                                d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                                d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                                d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                                d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z" />
                            <path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                                d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z" />
                        </g>
                        <g class="climacon_componentWrap climacon_componentWrap_sunBody">
                            <circle class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                cx="50.034"
                                cy="50"
                                r="11.999" />
                            <circle class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                                fill="#FFFFFF"
                                cx="50.034"
                                cy="50"
                                r="7.999" />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="iconWeather" fill="currentColor" class="bi bi-cloud-sleet" viewBox="0 0 16 16">
                <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223z" />
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
                <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" />
            </svg>
        )
       
    }

    return svgIcon;

}