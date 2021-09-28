import { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MapBox = () => {
    const [viewPort,setViewPort]=useState({
        longitude: 45.4211,
        latitude: -75.6903,
        zoom:10,
        width:'90%',
        height:'80%'
    })
    return (
            <ReactMapGl {...viewPort} mapStyle="mapbox://styles/mbilaldanish/cktwmmuzf0x5g17m0uwqdp4js" onViewportChange={(viewPort) => setViewPort(viewPort)} mapboxApiAccessToken="pk.eyJ1IjoibWJpbGFsZGFuaXNoIiwiYSI6ImNrdHdqeWVxNDB2Y2Iyb214OXIxMmNrNmoifQ.P8s5GiTNwME8VvG6lgU4ug" />
    )
}

export default MapBox
