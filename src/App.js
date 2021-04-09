import React, { Fragment } from 'react';
import { MDBSelect, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import HeaderPage from './components/HeaderPage'
import ChartSite from './components/ChartSite'
import FooterPage from './components/FooterPage'
import Statistik from './components/Statistik'
import Prognose from './components/Prognose'
import Information from './components/Information'
import './App.css';

const App = () => {
  return <div>
    <HeaderPage />


    <div class="container-lg">
      <div class="col align-self-center" id="statistik">
        <ChartSite />
      </div>
    </div>

    <div class="container-lg">
      <div class="col align-self-center" id="prognosen">
        <ChartSite />
      </div>
    </div>


    <div class="container-lg">
      <div class="col align-self-center" id="informationen">
        <ChartSite />
      </div>
    </div>


    <FooterPage />
  </div>
}

export default App
