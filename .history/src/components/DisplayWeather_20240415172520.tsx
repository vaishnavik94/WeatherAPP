import React from 'react'
import {MainWrapper} from './styles.module'
import { AiOutlineSearch } from "react-icons/ai";

const DisplayWeather = () => {
  return (
    //<MainWrapper>

        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder='Search City...' id="cityInput"/>
            </div>
            <div className="searchCircle">
            <AiOutlineSearch />
            </div>
        </div>

        
    //</MainWrapper>
  )
}

export default DisplayWeather