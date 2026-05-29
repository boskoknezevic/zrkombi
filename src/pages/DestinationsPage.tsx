import { destinations } from '../data/destinations';
import TripCard from '../components/TripCard';
import Footer from '../components/Footer';

export default function DestinationsPage() {
  return (
    <div className="page-wrap">
      <div className="dest-page">
        <div className="page-header">
          <div className="section-label">Kuda putujemo</div>
          <h1 className="page-title">
            Naše <span>Destinacije</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginTop: 14, maxWidth: 540 }}>
            Organizujemo prevoz do sledećih destinacija. Za rezervaciju pozovite nas ili pošaljite poruku.
          </p>
        </div>

        <div className="dest-grid">
          {destinations.map((dest) => (
            <TripCard key={dest.name} destination={dest} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
