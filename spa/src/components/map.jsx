import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerPoint } from './marker-point';

export function Map({position, setPosition}) {
  const center = [51.505, -0.09]
  
  return (
        <MapContainer on style={{ height: '100%', width: '100%' }} center={center} zoom={33} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerPoint position={position} setPosition={setPosition}/>
        </MapContainer> 
  )
}
