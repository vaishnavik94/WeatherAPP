import React from 'react'
import {MainWrapper} from './styles.module'

const DisplayWeather = () => {
  return (
    //<MainWrapper>

        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder='Search City...' id="cityInput"/>
            </div>
            <div className="searchCircle"></div>
        </div>

        
    //</MainWrapper>
  )
}

export default DisplayWeather