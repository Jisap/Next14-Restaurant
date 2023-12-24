"use client"

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useMediaQuery } from "react-responsive"
import { Icon } from "leaflet"

import "leaflet/dist/leaflet.css"
import Image from "next/image"

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

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });



  return (
    <section>
      <MapContainer 
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10: 12}
        className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}  
        zoomControl={false}
      >
        <TileLayer 
          attribution="&copy; <a>'https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker 
              key={index} 
              position={marker.position} 
              icon={customIcon}
            >
              <Popup>
                <div>
                  <div>
                    <h3>{marker.title}</h3>
                    <p>{marker.subtitle}</p>
                  </div>
                  <div>
                    <Image 
                      src={marker.image}
                      width={130}
                      height={160}
                      alt="image"
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </section>
  )
}

export default Map