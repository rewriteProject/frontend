import React from 'react';
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
import Statistik from './components/Statistik'
import Prognose from './components/Prognose'
import Information from './components/Information'
import './App.css';

const App = () => {
  return <div>
    <HeaderPage />
    <Statistik />
    <Prognose />
    <Information />
    <FooterPage />
  </div>
}

export default App
