import "leaflet/dist/leaflet.css";

import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import L from "leaflet";
import React from "react";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "./MarkerClusterGroup";
import styles from "@/components/ShopsMap/Shops.module.css";

if (L.Icon) {
  delete (L.Icon.Default as any).prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
    iconUrl: "/images/leaflet/marker-icon.png",
    shadowUrl: "/images/leaflet/marker-shadow.png",
  });
}

const CENTER: [number, number] = [51.1657, 10.4515];
const ZOOM: number = 6;

const MapItem: React.FC<{
  center: [number, number];
  zoom: number | null;
  shops?: ShopsQuery["shops"] | null;
}> = ({ center, shops, zoom }) => {
  const map = useMap();
  if (zoom != null) {
    map.setView(center, zoom);
  } else {
    map.setView(center);
  }
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON data={{ type: "FeatureCollection", features: [] } as any} />
      {shops ? (
        <MarkerClusterGroup>
          {shops.map((item, k) => {
            return (
              item.location && (
                <Marker
                  key={k}
                  position={{
                    lat: item.location.latitude,
                    lng: item.location.longitude,
                  }}
                >
                  <Popup>
                    <b>{item.name}</b>
                    <p>{item.openinghours}</p>
                    <p>{item.address}</p>
                    <p>
                      {(item.shopcategories ?? [])
                        .map((c) => c.name)
                        .join(" - ")}
                    </p>
                  </Popup>
                </Marker>
              )
            );
          })}
        </MarkerClusterGroup>
      ) : null}
    </>
  );
};

const MemoMapItem = React.memo(MapItem);

export const ShopsMap: React.FC<{
  center: [number, number];
  zoom: number | null;
  shops?: ShopsQuery["shops"] | null;
  width?: string;
  height?: string;
}> = ({ center, zoom, shops, width = "100%", height = "100%" }) => {
  return (
    <div>
      <MapContainer
        className={styles.map}
        center={center ?? CENTER}
        zoom={zoom ?? ZOOM}
        maxZoom={15}
        style={{
          height,
          width,
        }}
      >
        <MemoMapItem shops={shops} center={center} zoom={zoom ?? ZOOM} />
      </MapContainer>
    </div>
  );
};
