import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
//import "leaflet/dist/leaflet.css";


export function Home() {
  return (
   <div  className="w-full min-h-screen">
     <MapContainer style={{ height: '100vh', width: '100wh' }} center={[51.505, -0.09]} zoom={33} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
   </div>
  )
}
