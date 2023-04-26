import {useState} from 'react'
import moment from 'moment'

const Home = (props) => {
    const date = moment()

    return (
        <>
            <ul class='flex'>
                <li class='mr-6'>
                    <a class='text-blue-800 hover:text-blue-800 cursor-pointer' onClick={props.homeToggle}>Home</a>
                </li>
                <li class='mr-6'>
                    <a class='text-blue-500 hover:text-blue-800 cursor-pointer' onClick={props.profileToggle}>Profile</a>
                </li>
                <li class='mr-6'>
                    <a class='text-blue-500 hover:text-blue-800 cursor-pointer' onClick={props.loginToggle}>Sign In / Up</a>
                </li>
            </ul>
            <div class='container mx-auto'>
                <h1 class='text-5xl'>{date.format('dddd')}</h1>
                <h1>{date.format('MMM Do YY')}</h1>
                <br/>
                <p>Current: {props.weather.temp}°F</p>
                <p>Feels Like: {props.weather.feelslike}°F</p>
                <p>Humidity: {props.weather.humidity}°F</p>
                <p>WindSpeed: {props.weather.windspeed} mph</p>
                <p>UV index: {props.weather.uvindex}</p>
                <p>Conditions: {props.weather.icon}</p>
                <br/>
                <p>Quote of the Day: '{props.quote.quote}' -{props.quote.author}</p>
            </div>
        </>
    )
}

export default Home;