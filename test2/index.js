import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import weatherData from './data';


class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Weather Display</h1>
                <WeatherDisplay city={'london'} tempMin={weatherData.london.main.temp_min} tempMax={weatherData.london.main.temp_max} description={weatherData.london.weather[0].description} />
            </div>
        )
    }
}

export default Test2;