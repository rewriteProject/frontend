import React from 'react';
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
import Statistik from './components/Statistik'
import StatistikContent from './components/StatistikContent'
import Prognose from './components/Prognose'
import PrognoseContent from './components/PrognoseContent'
import Information from './components/Information'
import InformationContent from './components/InformationContent'
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
