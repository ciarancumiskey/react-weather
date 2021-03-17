import './App.css';
import React, { useEffect, useState } from "react";

export default function App() {
    //Create states for location
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    //Load functions once the app has reloaded
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
        console.log("Latitude and longitude = ", lat, lon)
    }, [lat, lon]);
    return (
        <div className="App">
              
        </div>
    );
}
