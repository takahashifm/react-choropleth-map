import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

export default function TopoJSON(props) {
  const layerRef = useRef(null);
  const { data, ...otherProps } = props;

  function addData(layer, jsonData) {
    if (jsonData.type === "Topology") {
      for (let key in jsonData.objects) {
        let geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson);
      }
    } else {
      layer.addData(jsonData);
    }
  }

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { VALUE } = feature.properties;
      layer.bindPopup(
        feature.properties.VALUE.toLocaleString() +
          "<br>" +
          "流れの値" +
          "<img src=https://glinnovation.jp/wordpress/wp-content/themes/greenandlife/images/logo.jpg>"
      );
    }
  }

  let legend;

  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);

  return (
    <GeoJSON ref={layerRef} {...otherProps} onEachFeature={onEachFeature} />
  );
}
