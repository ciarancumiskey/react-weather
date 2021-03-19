import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
//Get the .env variables
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

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
            await fetch(`https://cors-anywhere.herokuapp.com/${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => res.json())
            .then(result => {
                    setData(result)
                    console.log(result);
            })
            .catch(error => {
                    console.log("Error while loading from OWM's API: " + error);
            });
        }
        fetchData();
    }, [lat, lon])
    return (
        <div className="App">
            {(typeof data.main != 'undefined') ?
                (<Weather weatherData={data} />) :
                (<div></div>)
            }
        </div>
    );
}
