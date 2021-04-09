import React, { Component } from 'react';
import { MDBDatePickerV5, MDBNavLink, MDBIcon, MDBRow, MDBCol, MDBNav, MDBTabContent, MDBLink, MDBNavItem, MDBTabPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PrognoseContent from './PrognoseContent'

class Prognose extends Component {
  state = {
    items: {
      default: "1",
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    const { activeItemPills } = this.state;

    return (
      <MDBContainer id="prognosen">
        <MDBCard style={{marginTop: "3rem" }}>
          <MDBCardHeader color="danger-color">PROGNOSEN</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>PROGNOSEN</MDBCardTitle>

            <MDBCardText>

              <Router>
                <MDBContainer>
                  <div className="d-flex justify-content-end">
                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="danger" type="submit"
                          active={this.state.items["default"] === "1"}
                          onClick={this.togglePills("default", "1")} >
                          <MDBIcon icon="calendar-check" size="lg" className="mr-2" />
                          Erwartetes Lieferdatum
                        </MDBBtn>
                      </div>

                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="danger" type="submit"
                          active={this.state.items["default"] === "2"}
                          onClick={this.togglePills("default", "2")} >
                          <MDBIcon icon="filter" size="lg" className="mr-2" />
                          Merkmalsentwicklung
                        </MDBBtn>
                      </div>
                  </div>
                  <MDBTabContent activeItem={this.state.items["default"]}>

                    <MDBTabPane tabId="1">

                      <div className="d-flex bd-highlight example-parent">
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h4>Land: </h4>
                          <select className="browser-default custom-select">
                            <option>Wähle ein Land aus</option>
                            <option value="1">China</option>
                            <option value="2">USA</option>
                            <option value="3">Russland</option>
                          </select>
                        </div>
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h4>Startdatum: </h4>
                          <PrognoseContent />
                        </div>
                      </div>
                    </MDBTabPane>

                    <MDBTabPane tabId="2">

                      <div className="d-flex bd-highlight example-parent">
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h4>Land: </h4>
                          <select className="browser-default custom-select">
                            <option>Wähle ein Land aus</option>
                            <option value="1">China</option>
                            <option value="2">USA</option>
                            <option value="3">Russland</option>
                          </select>
                        </div>
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h4>Intervall: </h4>
                          <select className="browser-default custom-select">
                            <option>Wähle ein Intervall aus</option>
                            <option value="1">daily</option>
                            <option value="2">monthly</option>
                            <option value="3">yearly</option>
                          </select>
                        </div>
                      </div>


                      <div className="d-flex bd-highlight example-parent">
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <div>
                            <h4>Merkmalsart: </h4>
                            <select className="browser-default custom-select">
                              <option>Wähle eine Merkmalsart aus</option>
                              <option value="1">Marke</option>
                              <option value="2">Farbe</option>
                              <option value="3">Material</option>
                            </select>
                          </div>
                        </div>
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <div>
                            <h4>Merkmal: </h4>
                            <select className="browser-default custom-select">
                              <option>Wähle ein Merkmal aus</option>
                              <option value="1">Grün</option>
                              <option value="2">Rot</option>
                              <option value="3">Gelb</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-stretch bd-highlight example-parent">
                        <div className="p-2 col-example text-left">
                          <h4>Startdatum: </h4>
                            <div className="p-2 col-example text-left">
                              <PrognoseContent />
                            </div>
                        </div>
                      </div>

                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <ChartSite />
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBContainer>
              </Router>


            </MDBCardText>

            <div className="d-flex example-parent">
              <div className="p-2 col-example">
                <MDBBtn rounded color="danger"
                  onClick={this.togglePills("default", "1")} >
                  <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                  Prognose neu berechnen
                </MDBBtn>
              </div>

              <div className="ml-auto p-2 col-example">
                <AnchorLink  offset={() => 50} href='#prognosen'>
                  <MDBBtn rounded color="danger" type="submit"
                    active={this.state.items["default"] === "3"}
                    onClick={this.togglePills("default", "3")} >
                    <MDBIcon icon="info" size="lg" className="mr-2" />
                    Erstellen
                  </MDBBtn>
                </AnchorLink>
              </div>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  };
};

export default Prognose;
