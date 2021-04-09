import React, { Component } from "react";
import { MDBCol, MDBRow, MDBFooter, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { BrowserRouter } from 'react-router-dom';

class FooterPage extends Component {
    state = {
      activeItem: "0"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <BrowserRouter>
        <MDBFooter color="peach-gradient" className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3" link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
            <h6 className="title font-weight-bold">
              <a href="#!">Über uns</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3" link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
            <h6 className="title font-weight-bold">
              <a href="#!">Hilfe</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3" link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
            <h6 className="title font-weight-bold">
              <a href="#!">Kontakt</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
            <MDBTabContent activeItem={this.state.activeItem} >

              <MDBTabPane tabId="0" role="tabpanel"  /> Herzlich willkommen auf unserer Website!

              <MDBTabPane tabId="1" role="tabpanel">

                <div  class="mt-2">
                  <h2>Das Projektteam</h2><br />

                  <div class="mt-2">
                    <div class="row">
                      <div class="col-6">
                        <h3>Christian Broz</h3>
                        <p><b>Datenerfassung und Datensicherung</b><br />
                          Datenversorgung über direkte Verbindung zu einer existierenden Software und deren Sicherung in einer Datenbank.
                        </p>
                        <p><b>Kontakt: </b><br />cbroz@student.tgm.ac.at</p>
                      </div>
                      <div class="col-6">
                        <h3>Lisa Wachter</h3>
                        <p><b>Algorithmus-Entwicklung</b><br />
                          Erstellung von Statistiken zu Wahrscheinlichkeiten und Prognosen durch Analyse vorhandener Daten.
                        </p>
                        <p><b>Kontakt: </b><br />lwachter@student.tgm.ac.at</p>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="mt-2">
                    <div class="row">
                      <div class="col-6">
                        <h3>Florian Medved</h3>
                        <p><b>Schnittstellen-Programmierung</b><br />
                          Implementierung der Hauptschnittstelle zur direkten Kommunikation zwischen der Datenaufbereitung und der Analyse auf der Website.
                        </p>
                        <p><b>Kontakt: </b><br />fmedved@student.tgm.ac.at</p>
                      </div>
                      <div class="col-6">
                        <h3>Amin Javed</h3>
                        <p><b>Visuelle Darstellung von Daten</b><br />
                          Grafische Implementierung von Statistiken und Prognosen auf einer Website.
                        </p>
                        <p><b>Kontakt: </b><br />ajaved@student.tgm.ac.at</p>
                      </div>
                    </div>
                  </div>
                </div>

              </MDBTabPane>

              <MDBTabPane tabId="2" role="tabpanel">
                <p className="mt-2">
                  Bitte helfen Sie mir ich bin hier in Gefahr!
                </p>
              </MDBTabPane>

              <MDBTabPane tabId="3" role="tabpanel">
                <div class="mt-2">
                  <div class="row">
                    <div class="col-6">
                      <h4>Auftraggeber</h4>
                      <p>Leo Winkler<br />leo.winkler@outlook.com</p>
                      <p>Semih Cakir<br />secakir20@gmail.com</p>
                    </div>
                    <div class="col-6">
                      <h4 >Projektleitung</h4>
                      <p>Christian Broz<br />cbroz@student.tgm.ac.at</p>
                    </div>
                  </div>
                </div>
              </MDBTabPane>

            </MDBTabContent>
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12" id="foot">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4"> </i>
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
      </BrowserRouter>
    );
  }
}
export default FooterPage;
