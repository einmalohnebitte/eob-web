import "leaflet/dist/leaflet.css";

import { Shop } from "@/components/ShopsMap/useShops";
import L from "leaflet";
import React from "react";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import styled from "styled-components";

import { MQ_DESKTOP } from "../../constants/MediaQueries";

require("react-leaflet-markercluster/dist/styles.min.css");

if (L.Icon) {
  delete (L.Icon.Default as any).prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    // eslint-disable-next-line global-require
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    // eslint-disable-next-line global-require
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    // eslint-disable-next-line global-require
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
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

const CENTER: [number, number] = [48.13743, 11.57549];
export const ShopsMap: React.FC<{
  center?: [number, number] | null;
  shops: Shop[];
  width?: string;
  height?: string;
}> = ({ center, shops = null, width = "100%", height = "100%" }) => (
  <StyledMap>
    <MapContainer
      className={"map"}
      center={center ?? CENTER}
      zoom={12}
      maxZoom={15}
      style={{
        height,
        width,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON data={{ type: "FeatureCollection", features: [] } as any} />
      <MarkerClusterGroup>
        {(shops ?? []).map((item, k) => {
          return (
            item.geom?.coordinates && (
              <Marker key={k} position={item.geom?.coordinates}>
                <Popup>
                  <b>{item.name}</b>
                  <p>{item.oeffnungszeiten}</p>
                  <p>
                    {item.strasse} - {item?.stadt?.name}
                  </p>
                  <p>{(item.kategorien ?? []).join(" - ")}</p>
                </Popup>
              </Marker>
            )
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  </StyledMap>
);
