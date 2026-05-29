import type { Destination } from '../types';

export const destinations: Destination[] = [
  { name: 'Pelješac', country: 'Hrvatska', flagCode: 'hr', lat: 42.9750, lng: 17.1794, photo: 'photos/peljesac.jpg', },
  { name: 'Aerodrom Beograd', country: 'Srbija', flagCode: 'rs', lat: 44.8184, lng: 20.3091, photo: 'photos/aerodrom-beograd.jpg' },
  { name: 'Pandorf Outlet', country: 'Austrija', flagCode: 'at', lat: 47.9970, lng: 16.9410, photo: 'photos/pandorf.jpg' },
  { name: 'Makarska', country: 'Hrvatska', flagCode: 'hr', lat: 43.2963, lng: 17.0170, photo: 'photos/makarska.jpg' },
  { name: 'Aerodrom Temišvar', country: 'Rumunija', flagCode: 'ro', lat: 45.8099, lng: 21.3379, photo: 'photos/temisvar-aerodrom.jpg' },
  { name: 'Zlatibor', country: 'Srbija', flagCode: 'rs', lat: 43.7297, lng: 19.7050, photo: 'photos/zlatibor.jpg' },
  { name: 'Rafting Foča', country: 'Bosna i Hercegovina', flagCode: 'ba', lat: 43.5050, lng: 18.7750, photo: 'photos/foca-rafting.jpg' },
  { name: 'Lovran', country: 'Hrvatska', flagCode: 'hr', lat: 45.2919, lng: 14.2740, photo: 'photos/lovran.jpg' },
  { name: 'Zeleznička stanica Prokop', country: 'Srbija', flagCode: 'rs', lat: 44.7879, lng: 20.4489, photo: 'photos/prokop.jpg' },
  { name: 'Orebic', country: 'Hrvatska', flagCode: 'hr', lat: 42.9769, lng: 17.1736, photo: 'photos/orebic.jpg' },
  { name: 'Subotica', country: 'Srbija', flagCode: 'rs', lat: 46.1005, lng: 19.6653, photo: 'photos/subotica.jpg' },
  { name: 'Sutomore', country: 'Crna Gora', flagCode: 'me', lat: 42.1426, lng: 19.0460, photo: 'photos/sutomore.jpg' },
  { name: 'Kamenari', country: 'Crna Gora', flagCode: 'me', lat: 42.4570, lng: 18.6500, photo: 'photos/kamenari.jpg' },
  { name: 'Klek', country: 'Hrvatska', flagCode: 'hr', lat: 42.9245, lng: 17.5636, photo: 'photos/klek.jpg' },
  { name: 'Tara / Zaovine', country: 'Srbija', flagCode: 'rs', lat: 43.8980, lng: 19.3910, photo: 'photos/tara-zaovine.jpg' },
  { name: 'Klinicki centar Beograd', country: 'Srbija', flagCode: 'rs', lat: 44.8024, lng: 20.4681, photo: 'photos/klinicki-centar.jpg' }
];

export const featuredTrips: Destination[] = [
  destinations[0],
  destinations[1],
];
