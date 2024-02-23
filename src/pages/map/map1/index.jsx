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
   <div>
      <h2 className="text-xl font-bold">React MapBox With Marker</h2>
     
    <div className="w-[90%] h-screen">
        
    {  viewport.latitude && viewport.longitude &&<Map
        mapboxAccessToken={'your token'}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
      </Map>}
    </div>
    <div className="w-[90%] h-screen">
        {/* <SearchableMap/> */}
    </div>
   </div>
  );
}
export default MyMap;
