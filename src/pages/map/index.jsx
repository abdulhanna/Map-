'use client'
// import React,{useState} from "react";
import Map, { GeolocateControl,Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect, useRef, useState } from "react";
// import SearchableMap from "@/app/components/mapSearch";


function MyMap() {
    const [viewport, setViewport] = useState({});
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        // console.log(pos.coords.latitude)
        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 3.5,
        });
      });
    }, []);

  

    // console.log(viewport,'eeee')
  return (
   <div className="mt-4">
      <h2 className="text-xl font-bold">React MapBox</h2>
      <div className="w-[90%] h-screen my-4">
      <Map
        mapboxAccessToken={'your token'}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>

   </div>
  );
}
export default MyMap;
