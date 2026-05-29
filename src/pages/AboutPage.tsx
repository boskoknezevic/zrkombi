import Footer from '../components/Footer';

interface ValueItem {
  title: string;
  text: string;
  icon: React.ReactNode;
}
console.log("ABOUT PAGE RENDER");
const values: ValueItem[] = [
  {
    title: 'Sigurnost',
    text: 'Vozila su redovno servisirana, a vozač poseduje sva potrebna dokumenta i dozvole. Vaša bezbednost je prioritet broj jedan.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Tačnost',
    text: 'Poštujemo vreme naših putnika. Dolazimo na vreme i ispoštujemo dogovoreni raspored putovanja bez nepotrebnih čekanja ili kašnjenja.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Udobnost',
    text: 'Putujte u klimatizovanim, modernim vozilima sa dovoljno prostora za prtljag. Dugačka putovanja prolaze lakše kada ste zaista udobni.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="about-page">

        {/* ── PAGE HEADER ── */}
        <div className="page-header">
          <div className="section-label">Taxi S — Zrenjanin</div>
          <h1 className="page-title">
            O <span>Nama</span>
          </h1>
        </div>

        {/* ── INTRO GRID ── */}
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <h2>Vaš pouzdani partner na putu</h2>
            <p>
              Taxi S je porodična firma osnovana u Zrenjaninu, koja već više od 20 godina pruža
              pouzdan, udoban i siguran prevoz putnika do destinacija u Srbiji i inostranstvu.
              Prevozi putnika do Beča, Zlatibora, Temišvara, jadranskih letovišta i
              desetina drugih destinacija.
            </p>
            <p>
              Iskusan vozač sa višedecenijskim stažom.
              Vozni park se redovno servisira i obnavlja kako biste uvek
              putovali u savremenom i klimatizovanom vozilu.
            </p>
            <p>
              Možete me kontaktirati telefonom ili putem društvenih mreža — uvek sam dostupan za
              rezervacije i informacije.
            </p>
          </div>

          <div className="about-img-block">
            <div className="img-placeholder">
              <img src="/photos/onama.jpg" alt="Vozač i vozilo" />
            </div>
          </div>
        </div>

        {/* ── VREDNOSTI ── */}
        <div className="about-values">
          {values.map((v) => (
            <div key={v.title} className="value-item">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-text">{v.text}</p>
            </div>
          ))}
        </div>

        {/* ── ISKUSTVO / NASLEDJE ── */}
        <div className="about-heritage" style={{ marginTop: 72 }}>
          <div className="about-intro-grid">
            <div className="about-img-block">
              <div className="img-placeholder">
                <img src="/photos/stari-auto.jpg" alt="Vozač i vozilo" />
              </div>
            </div>

            <div className="about-intro-text">
              <div className="section-label">Od početka do danas</div>
                <h2>Dugogodišnje iskustvo u prevozu putnika</h2>
                <p>
                  Preko 20 godina iskustva u poslu prevoza putnika širom Srbije i regiona.
                  Pouzdanost, sigurnost i korektan odnos prema putnicima su ono na čemu se posao zasniva od prvog dana.
                </p>
            </div>
          </div>
        </div>

        {/* ── VOZILA ── */}
        <div style={{ marginTop: 72 }}>
          <div className="section-label">Vozni park</div>
          <h2 className="section-heading" style={{ marginBottom: 32, fontSize: '2rem' }}>
            Naša Vozila
          </h2>

          <div className="vehicles-grid">

            {/* Volkswagen T5 Caravelle */}
            <div className="vehicle-card">
              <div className="img-placeholder">
                <img src="/photos/kombi.jpg" alt="Vozač i vozilo" />
              </div>
              <div className="vehicle-info">
                <div className="vehicle-brand">Volkswagen</div>
                <div className="vehicle-model">T5 Caravelle 8+1</div>
                <p className="vehicle-desc">
                  Prostrani kombi idealan za grupna putovanja i veće količine prtljaga.
                  Klimatizovan, udobnih sedišta i odličnih putnih karakteristika.
                </p>
              </div>
            </div>

            {/* Volkswagen Passat B8 */}
            <div className="vehicle-card">
             <div className="img-placeholder">
                <img src="/photos/auto.png" alt="Vozač i vozilo" />
              </div>
              <div className="vehicle-info">
                <div className="vehicle-brand">Volkswagen</div>
                <div className="vehicle-model">Passat B8 4+1</div>
                <p className="vehicle-desc">
                  Moderan i elegantan automobil za udobna individualna i porodična putovanja.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}