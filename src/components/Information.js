import React from 'react';
import { MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'

const Information = () => {
  return (
    <MDBContainer id="informationen">
      <MDBCard style={{marginTop: "3rem", marginBottom: "3rem"}}>
        <MDBCardHeader color="warning-color">INFORMATIONEN</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>INFORMATIONEN</MDBCardTitle>

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
                <MDBIcon icon="info" size="lg" className="mr-2" /> Erstellen
              </MDBBtn>
            </div>
          </div>

        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Information;
