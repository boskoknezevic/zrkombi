import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';

import type { Destination } from '../types';

interface MiniMapProps {
  destination: Destination;
}

const zrenjanin: [number, number] = [45.3836, 20.3819];

// Fix za default marker ikonice
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MiniMap({ destination }: MiniMapProps) {
  const destinationPos: [number, number] = [
    destination.lat,
    destination.lng,
  ];

  const center: [number, number] = [
    (zrenjanin[0] + destination.lat) / 2,
    (zrenjanin[1] + destination.lng) / 2,
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        key={destination.name}
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <Marker position={zrenjanin} />

        <Marker position={destinationPos} />

        <Polyline
          positions={[zrenjanin, destinationPos]}
          pathOptions={{
            color: '#c9a84c',
            weight: 3,
            dashArray: '8 8',
          }}
        />
      </MapContainer>
    </div>
  );
}