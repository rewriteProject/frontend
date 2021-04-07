import React from 'react';
import { MDBSelect, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import HeaderPage from './components/HeaderPage'
import ChartSite from './components/ChartSite'
import Kontakt from './components/Kontakt'
import FooterPage from './components/FooterPage'
import './App.css';

const App = () => {
  return <div>
    <HeaderPage />
    <FooterPage />
  </div>
}

export default App
