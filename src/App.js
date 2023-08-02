import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "./styles.css";
import Choropleth from "./Choropleth";
import TopoJSON from "./TopoJSON";
//import topojson from "./phuong.json";
//import topojson from "./test_waveheight_mesh.topojson";
//import topojson from "./test3.json";
// ファイルの拡張子はjsonじゃないといけないみたい
import topojson from "./react_test_nagare.json";

//import Legend from "./Legend";
import MapLegendControl from "./MapLegendControl";

const limeOptions = {
  fillColor: "red",
  color: "lightgray",
  weight: 0.1,
  fillOpacity: 0.3
};

export default function App() {
  return (
    <MapContainer
      center={[41.75459, 140.749664]}
      zoom={8}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <TopoJSON data={topojson} pathOptions={limeOptions} />
    </MapContainer>
  );
}
