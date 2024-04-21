import React from 'react'
import { MainWrapper } from './styles.module'
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillSunFill, BsFillCloudFill, BsFillCloudRainFill, BsCloudFog2Fill } from "react-icons/bs";
import axios, { Axios } from 'axios';


interface weatherDataProps{
    name: string; 

    main: {
        temp?: number,   //Temperature in kelvin by default
        humidity?: number,     
    },
    sys: {
        country: string;                
    }[];
    wind: { 
        speed?:number;
    },
    weather: {
        main: string;
    }
}

const DisplayWeather = () => {

    const api_key="0cc86d16bf572f78cdc96c096c7627e5";
    const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

    const [weatherData, setWeatherData] = React.useState<weatherDataProps | null>(null)

    const fetchCurrentWeather = async (lat:number, lon:number) =>{
        const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&unit=metric`; 
        const response = await axios.get(url);
        
        return response.data;
    }


    React.useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude} = position.coords;
            Promise.all([fetchCurrentWeather(latitude,longitude)]).then(
                ([currentWeather]) => {
                    console.log(currentWeather)
                }
            )
        })
    })

  return (
    <MainWrapper>

        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder='Search City...' id="cityInput"/>
            
                <div className="searchCircle">
                    <AiOutlineSearch className='searchIcon' />
                </div>
            </div>


            {weatherData && (
                <>
                    <div className="weatherArea">
                        <h1>{weatherData.name}</h1>
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
                </>
            )}

            
        </div>  

    </MainWrapper>
  );
};

export default DisplayWeather