import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const fromIcon = icon({
  iconUrl: "/icons/from.png",
  iconSize: [40, 40],
  iconAnchor: [20, 35],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export default function Map() {
  return (
    <MapContainer
      center={[34.70478, 33.11255]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={fromIcon} position={[34.70478, 33.11255]}></Marker>
    </MapContainer>
  );
}
