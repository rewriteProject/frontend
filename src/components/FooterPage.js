import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="peach-gradient" className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Über uns</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Hilfe</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Kontakt</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Der Auftraggeber arbeitet an einer innovativen Software, die Daten zu Logistik und Kaufverhalten von diversen Produkten sammelt.​
              Daher wird eine maßgeschneiderte Lösung benötigt, die diese Daten analysiert und auf einer Website in Form von Diagrammen darstellt.​
              Darüber hinaus sollen anhand der aufbereiteten Daten Wahrscheinlichkeiten und Prognosen berechnet werden können.
              ReWrite soll Daten einer zentralen Datenbank, die von einer Software gesammelt wurden,
              analysieren sowie auswerten und anschließend auf einer Webpage je nach Datenart anzeigen.
              Monatlich werden die Daten der zentralen Datenbank geklont und auf die vom Projektteam
              zu entwickelnde Datenbank übertragen.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
