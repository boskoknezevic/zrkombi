import type { PageId, TeaserItem } from '../types';
import { featuredTrips } from '../data/destinations';
import TripCard from '../components/TripCard';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

interface Platform {
  name: string;
  handle: string;
  url: string;
  followLabel: string;
  iconClass: string;
  icon: React.ReactNode;
}

const platforms: Platform[] = [
  {
    name: 'Facebook',
    handle: '@KombiPrevozZrenjanin',
    url: 'https://www.facebook.com/taxiszr/',
    followLabel: 'Zapratite na Facebooku',
    iconClass: 'fb',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@taxiszr',
    url: 'https://instagram.com/taxiszr',
    followLabel: 'Zapratite na Instagramu',
    iconClass: 'ig',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@kombiprevozzrenjanin',
    url: 'https://www.tiktok.com/@s.taxizr',
    followLabel: 'Zapratite na TikToku',
    iconClass: 'tt',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const teaserItems: TeaserItem[] = [
  {
    num: '01',
    title: 'O Nama',
    text: 'Više od 20 godina iskustva u prevozu putnika.',
    link: 'Pročitajte više →',
    page: 'about',
  },
  {
    num: '02',
    title: 'Destinacije',
    text: 'Prevoz do 30+ destinacija u Srbiji, Austriji, Nemačkoj, Hrvatskoj i šire. Bez brige o transferu.',
    link: 'Pogledajte destinacije →',
    page: 'destinations',
  },
  {
    num: '03',
    title: 'Društvene Mreže',
    text: 'Pratite nas na Facebooku, Instagramu i TikToku za najnovije vesti i ponude.',
    link: 'Zapratite nas →',
    page: 'social',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="page-wrap">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow animate-fade-up-1">Pouzdan prevoz od 2004.</div>
          <h1 className="hero-title animate-fade-up-2">
            Kombi Prevoz<br />
            <span>Zrenjanin</span>
          </h1>
          <p className="hero-subtitle animate-fade-up-3">
            Taxi S — udoban i siguran prevoz putnika
          </p>
          <div className="hero-cta animate-fade-up-4">
            <a href="tel:+381646106181" className="btn-primary">Pozovite nas</a>
            <button className="btn-ghost" onClick={() => onNavigate('destinations')}>
              Naše destinacije
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-placeholder">
            <img src="/photos/pocetna.jpg" alt="Kombi vozilo" />
          </div>
        </div>
      </section>

      {/* ── TEASER STRIP ── */}
      <div className="teaser-strip">
        <div className="teaser-grid">
          {teaserItems.map((item) => (
            <div key={item.num} className="teaser-item" onClick={() => {
                if (item.page === 'social') {
                  document.getElementById('social')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  return;
                }

                onNavigate(item.page);
              }}>
              <div className="teaser-num">{item.num}</div>
              <div className="teaser-title">{item.title}</div>
              <p className="teaser-text">{item.text}</p>
              <button className="teaser-link">{item.link}</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── O NAMA TEASER ── */}
      <section className="home-about">
        <div>
          <div className="section-label">Ko smo mi</div>
          <h2 className="section-heading">
            20+ Godina<br />Iskustva
          </h2>
          <div className="stat-row">
            {[
              { value: '20+', label: 'Godina iskustva' },
              { value: '30+', label: 'Destinacija' },
              { value: '100%', label: 'Zadovoljnih putnika' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="section-body">
            Taxi S je firma sa sedištem u Zrenjaninu koja već dve decenije pruža
            pouzdan i udoban prevoz putnika do destinacija širom Evrope. Sigurnost, tačnost
            i komfor su naši prioriteti.
          </p>
          <button className="btn-primary" onClick={() => onNavigate('about')}>
            Prikaži više
          </button>
        </div>

        <div className="about-image-wrap">
          <div className="about-placeholder">
            <img src="/photos/kosmomi.jpeg" alt="Naše vozilo" />
          </div>
          <div className="about-badge">
            <span className="big">20+</span>
            <span className="small">god. rada</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── POPULARNE DESTINACIJE ── */}
      <section className="home-trips">
        <div className="trips-header">
          <div>
            <div className="section-label">Prethodne vožnje</div>
            <h2 className="section-heading">
              Popularne<br />Destinacije
            </h2>
          </div>
        </div>

        <div className="trips-grid">
          {featuredTrips.map((dest) => (
            <TripCard key={dest.name} destination={dest} />
          ))}
        </div>

        <div className="trips-footer">
          <button className="btn-ghost" onClick={() => onNavigate('destinations')}>
            Prikaži sve destinacije
          </button>
        </div>
      </section>

      {/* ── SOCIAL SECTION ── */}
      <section className="home-social" id="social">
        <div className="container">
          <div className="social-header">
            <div className="section-label">Pratite nas</div>
            <h2 className="section-heading">
              Društvene mreže
            </h2>
            <p className="section-body">
              Budite u toku sa najnovijim ponudama i vestima o našim putovanjima.
            </p>
          </div>

          <div className="social-platforms">
            {platforms.map((platform) => (
              <div key={platform.name} className="social-platform">
                <div className="social-platform-header">
                  <div className={`social-icon ${platform.iconClass}`}>
                    {platform.icon}
                  </div>

                  <div>
                    <div className="social-platform-name">{platform.name}</div>
                    <div className="social-platform-handle">{platform.handle}</div>
                  </div>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-follow-btn"
                >
                  {platform.followLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
