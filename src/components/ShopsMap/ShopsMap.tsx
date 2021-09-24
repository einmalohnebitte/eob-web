import "leaflet/dist/leaflet.css";

import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import L from "leaflet";
import React, { useRef } from "react";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import styled from "styled-components";

import { MQ_DESKTOP } from "../../constants/MediaQueries";

require("react-leaflet-markercluster/dist/styles.min.css");

if (L.Icon) {
  delete (L.Icon.Default as any).prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
    iconUrl: "/images/leaflet/marker-icon.png",
    shadowUrl: "/images/leaflet/marker-shadow.png",
  });
}
const StyledMap = styled.div`
  .map {
    min-height: 300px;
    @media ${MQ_DESKTOP} {
      min-height: 400px !important;
    }
  }
`;

const CENTER: [number, number] = [51.1657, 10.4515];

const MapItem: React.FC<{
  center?: [number, number] | null;
  shops: ShopsQuery["shops"];
}> = ({ center, shops }) => {
  const map = useMap();
  const centerRef = useRef(center ?? CENTER);
  if (center !== centerRef.current) {
    centerRef.current = center ?? CENTER;
    map.setView(centerRef.current);
  }
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON data={{ type: "FeatureCollection", features: [] } as any} />
      <MarkerClusterGroup>
        {(shops ?? []).map((item, k) => {
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
                  <p>{/* {item.strasse} - {item?.stadt?.name} */}</p>
                  <p>{(item.shopcategories ?? []).join(" - ")}</p>
                </Popup>
              </Marker>
            )
          );
        })}
      </MarkerClusterGroup>
    </>
  );
};

export const ShopsMap: React.FC<{
  center?: [number, number] | null;
  shops: ShopsQuery["shops"];
  width?: string;
  height?: string;
}> = ({ center, shops, width = "100%", height = "100%" }) => {
  return (
    <StyledMap>
      <MapContainer
        className={"map"}
        center={center ?? CENTER}
        zoom={6}
        maxZoom={15}
        style={{
          height,
          width,
        }}
      >
        <MapItem shops={shops} center={center} />
      </MapContainer>
    </StyledMap>
  );
};
