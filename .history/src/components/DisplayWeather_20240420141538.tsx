import React from 'react'
import { MainWrapper } from './styles.module'
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillSunFill, BsFillCloudFill, BsFillCloudRainFill, BsCloudFog2Fill, BsCloudyFill } from "react-icons/bs";
import axios, { Axios } from 'axios';


interface WeatherDataProps{
    name: string; 

    main: {
        temp: number;  
        humidity: number;     
    };
    sys: {
        country: string;                
    };

    wind: { 
        speed:number;
    };
    weather: {
        main: string;
    }[];
}

const DisplayWeather = () => {

    const api_key="0cc86d16bf572f78cdc96c096c7627e5";
    const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

    const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(null);

    const [isLoading, setIsLoading] = React.useState(false);

    const fetchCurrentWeather = async (lat:number, lon:number) =>{
        const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`; 
        const response = await axios.get(url);
        
        return response.data;
    };

    const iconChanger = (weather:string) => {
        let iconElement: React.ReactNode;
        let iconColor:string;

        switch(weather) {
            case "Rain":
                iconElement = <BsFillCloudRainFill/>
                iconColor="#272829"
                break;

            case "Clear":
                iconElement = <BsFillSunFill/>
                iconColor="#ffc436"
                break;
        
            case "Clouds":
                iconElement = <BsCloudyFill/>
                iconColor="#102c57"
                break;

            case "Mist":
                iconElement = <BsCloudFog2Fill/>
                iconColor="#279eff"
                break;

            default : 
                iconElement = <TiWeatherPartlySunny/>
                iconColor="#782869"
        }

        return (
            <span className="icon" style={{color:iconColor}}>
                {iconElement}
            </span>
        )
    }
    React.useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude} = position.coords;
            Promise.all([fetchCurrentWeather(latitude,longitude)]).then(
                ([currentWeather]) => {
                    setWeatherData(currentWeather);
                    setIsLoading(true);
                    console.log(currentWeather);
                }
            );
        });
    });

  return (
    <MainWrapper>

        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder='Search City...' id="cityInput"/>
                <div className="searchCircle">
                    <AiOutlineSearch className='searchIcon' />
                </div>
            </div>


            {weatherData && isLoading ?(
                <>
                    <div className="weatherArea">
                        <h1>{weatherData.name}</h1>
                        <span>{weatherData.sys.country}</span>
                        <div className="icon">
                            {iconChanger(weatherData.weather[0].main)}
                        </div>
                        <h1>{weatherData.main.temp.toFixed(0)}</h1>
                        <h2>{weatherData.weather[0].main}</h2>
                    </div>

                    <div className="bottomInfoArea">
                        <div className="humidityLevel">
                            <WiHumidity className='windIcon'/>
                            <div className="humidInfo">
                                <h1>{weatherData.main.humidity}%</h1>
                                <p>Humidity</p>
                            </div>
                        </div>

                        <div className="windLevel">
                            <BiWind className='windIcon'/>
                            <div className="windInfo">
                                <h1>{weatherData.wind.speed}km/h</h1>
                                <p>Wind Speed</p>
                            </div>
                        </div>

                    </div>
                </>
            ):(
                <div className="loading">
                    <RiLoaderFill className='"loadingIcon'/>
                    <p>Loading</p>
                </div>
            )}
            
        </div>  

    </MainWrapper>
  );
};

export default DisplayWeather