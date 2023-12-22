"use client"

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useMediaQuery } from "react-responsive"
import { Icon } from "leaflet"

import "leaflet/dist/leaflet.css"

const markers = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/1.png"
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/2.png"
  },
  {
    position: [34.0211, -118.2965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/3.png"
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
})

const Map = () => {
  return (
    <section>
      <MapContainer 
        center={[34.052235, -118.243683]}
        zoom={10}
        className="h-[900px] z-10"  
        zoomControl={false}
      >
        <TileLayer 
          attribution="&copy; <a>'https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </section>
  )
}

export default Map