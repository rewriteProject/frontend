import React from 'react';
import { MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'

const Prognose = () => {
  return (
    <MDBContainer id="prognosen">
      <MDBCard style={{marginTop: "3rem" }}>
        <MDBCardHeader color="danger-color">PROGNOSEN</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>PROGNOSEN</MDBCardTitle>

          <MDBCardText>
            <div class="container-lg col align-self-center">
                <ChartSite />
            </div>
          </MDBCardText>

          <div className="d-flex example-parent">
            <div className="p-2 col-example">
              <MDBBtn rounded color="primary">
                <MDBIcon icon="caret-square-left" size="lg" className="mr-2" /> Prognose neu berechnen
              </MDBBtn>
            </div>

            <div className="ml-auto p-2 col-example">
              <MDBBtn rounded color="primary" type="submit" >
                <MDBIcon icon="chart-line" size="lg" className="mr-2" /> Erstellen
              </MDBBtn>
            </div>
          </div>

        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Prognose;
