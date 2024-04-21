import React from 'react'
import {MainWrapper} from './styles.module'
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";


const DisplayWeather = () => {
  return (
    //<MainWrapper>

        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder='Search City...' id="cityInput"/>
            
                <div className="searchCircle">
                    <AiOutlineSearch className='searchIcon' />
                </div>
            </div>

            <div className="weatherArea">
                <h1>Area Name</h1>
                <span>Country Name</span>
                <div className="icon">
                    icon
                </div>
                <h1>Temperature</h1>
                <h2>weather</h2>
            </div>

            <div className="bottomInfoArea">
                <div className="humidityLevel">
                    <WiHumidity className='windIcon'/>
                    <div className="humidInfo">
                        <h1>percent</h1>
                        <p>Humidity</p>
                    </div>
                </div>

                <div className="windLevel">
                    <BiWind className='windIcon'/>
                    <div className="windInfo">
                        <h1>speed</h1>
                        <p>Wind Speed</p>
                    </div>
                </div>

            </div>
        </div>

                

    //</MainWrapper>
  )
}

export default DisplayWeather