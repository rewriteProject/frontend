import React from 'react';
import "mdbreact/dist/css/mdb.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ChartSite from './components/ChartSite'
import FooterPage from './components/FooterPage'
import Kontakt from './components/Kontakt'
import './App.css';

const App = () => {
  return <div>
    <ChartSite />
    <Kontakt />
    <FooterPage />
  </div>
}

export default App
