import type { Destination } from '../types';
import MiniMap from './MiniMap';
import Flag from './Flag';

interface TripCardProps {
  destination: Destination;
}

export default function TripCard({ destination }: TripCardProps) {
  return (
    <div className="trip-card">
      
      <div className="trip-card-top">
        <div className="trip-map">
          <MiniMap destination={destination} />
        </div>

        <div className="trip-photo">
          <img src={destination.photo} alt={destination.name} />
        </div>
      </div>

      <div className="trip-card-bottom">
        <div className="trip-location-row">
          <div className="trip-destination">
            <Flag code={destination.flagCode} /> {destination.name}
          </div>

          <div className="trip-country">
            {destination.country}
          </div>
        </div>

        <div className="trip-route">
          Zrenjanin → {destination.name}
        </div>
      </div>
    </div>
  );
}