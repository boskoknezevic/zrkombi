import { useState } from 'react';
import type { PageId } from './types';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'destinations' && <DestinationsPage />}
    </>
  );
}
