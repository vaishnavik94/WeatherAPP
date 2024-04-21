import React from 'react'
import {MainWrapper} from './styles.module'
import { AiOutlineSearch } from "react-icons/ai";

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
        </div>

                

    //</MainWrapper>
  )
}

export default DisplayWeather