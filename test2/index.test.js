import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Test2 from './index';
import WeatherDisplay from './WeatherDisplay';
import weatherData from './data';

Enzyme.configure({ adapter: new Adapter() });

it('Test 2: London weather data is displayed in component', () => {
    const wrapper = mount(<WeatherDisplay city={'london'} tempMin={weatherData.london.main.temp_min} tempMax={weatherData.london.main.temp_max} description={weatherData.london.weather[0].description} />);

    // Check for elements appearing only once
    expect(wrapper.find('.weather').length).toBe(1);
    
    expect(wrapper.find('.tempMin').length).toBe(1);
    expect(wrapper.find('.tempMax').length).toBe(1);
    expect(wrapper.find('.city').length).toBe(1);
    expect(wrapper.find('.description').length).toBe(1);

    // Check values
    expect(wrapper.find('.tempMin').text()).toEqual(weatherData.london.main.temp_min.toString());
    expect(wrapper.find('.tempMax').text()).toEqual(weatherData.london.main.temp_max.toString());
    expect(wrapper.find('.city').text()).toEqual('london');
    expect(wrapper.find('.description').text()).toEqual(weatherData.london.weather[0].description);

});

it('Test 2: Weather Data is displayed for London, then Cairns', () => {
    const wrapper = mount(<Test2 />);
    expect(wrapper.find('.weather').length).toBe(2);

    wrapper.find('.weather').forEach((node, idx) => {
        const keys = [
            'london',
            'cairns'
        ];
        expect(node.find('.tempMin').length).toBe(1);
        expect(node.find('.tempMax').length).toBe(1);
        expect(node.find('.city').length).toBe(1);
        expect(node.find('.description').length).toBe(1);

        expect(node.find('.tempMin').text()).toEqual(weatherData[keys[idx]].main.temp_min.toString());
        expect(node.find('.tempMax').text()).toEqual(weatherData[keys[idx]].main.temp_max.toString());
        expect(node.find('.city').text()).toEqual(keys[idx]);
        expect(node.find('.description').text()).toEqual(weatherData[keys[idx]].weather[0].description);
    });
});
