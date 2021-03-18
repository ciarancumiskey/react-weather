import './App.css';
import React, { useEffect, useState } from "react";
//import Weather from './components/weather';

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
console.log("URL: " + REACT_APP_API_URL);
export default function App() {
    //Create states with associated functions for location
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [data, setData] = useState([]);
    //Load the state functions once the app has reloaded
    useEffect(() => {
        const fetchData = async() => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
            await fetch(`http://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }})
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });
        }
        fetchData();
    }, [lat, lon])
    return (
        <div className="App">
              
        </div>
    );
}
