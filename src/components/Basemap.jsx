import React from "react";
import "../css/Basemap.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Basemap = () => {
  return (
    <MapContainer zoom={10} center={[55.702868, 37.530865]}>
      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  );
};

export default Basemap;
