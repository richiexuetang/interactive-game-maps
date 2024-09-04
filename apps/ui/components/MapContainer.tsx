'use client';

import { LatLngBoundsExpression } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import * as ReactLeaflet from 'react-leaflet';

const { MapContainer: LeafletMapContainer, TileLayer } = ReactLeaflet;

export const MapContainer = () => {
  return (<LeafletMapContainer
    style={{ background: 'black', height: '100vh', width: '100vw' }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      zoom={10}
      minZoom={9}
      maxZoom={12}
      // center={[83.93, -168.15]}
      >
        <TileLayer
              url={`${process.env.CDN_BASE_URL}/chapter-2/{z}/{x}/{y}.png`}
              noWrap
              bounds={[[0, -1000],
                [1000, 1000]] as LatLngBoundsExpression}
            />
    </LeafletMapContainer>)
    
}