import React, { Component } from 'react';
import { MDBIcon, MDBTabContent, MDBTabPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import DatumPicker from './DatumPicker'

class Statistik extends Component {
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
      <MDBContainer id="statistik">
        <MDBCard style={{marginTop: "3rem" }}>
          <MDBCardHeader color="success-color">STATISTIKEN</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>STATISTIKEN</MDBCardTitle>

            <MDBCardText>

              <Router>
                <MDBContainer>
                  <div className="d-flex justify-content-end">
                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="success" type="submit"
                          active={this.state.items["default"] === "1"}
                          onClick={this.togglePills("default", "1")} >
                          <MDBIcon icon="calendar-check" size="lg" className="mr-2" />
                          Zeitraumabhängiger Anteil
                        </MDBBtn>
                      </div>
                  </div>
                  <MDBTabContent activeItem={this.state.items["default"]}>

                    <MDBTabPane tabId="1">
                      <h4>Zeitraumabhängiger Anteil</h4>
                      <div className="d-flex bd-highlight example-parent">
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h5>Land: </h5>
                          <select className="browser-default custom-select">
                            <option>Wähle ein Land aus</option>
                            <option value="1">China</option>
                            <option value="2">USA</option>
                            <option value="3">Russland</option>
                          </select>
                        </div>
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h5>Merkmalsart: </h5>
                          <select className="browser-default custom-select">
                            <option>Wähle eine Merkmalsart aus</option>
                            <option value="1">Marke</option>
                            <option value="2">Farbe</option>
                            <option value="3">Material</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex bd-highlight example-parent">
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h5>Startdatum: </h5>
                          <DatumPicker />
                        </div>
                        <div className="p-2 flex-fill bd-highlight col-example">
                          <h5>Enddatum: </h5>
                          <DatumPicker />
                        </div>
                      </div>

                    </MDBTabPane>

                    <MDBTabPane tabId="2">
                      <h4>Statistik</h4>
                      <ChartSite />
                    </MDBTabPane>

                  </MDBTabContent>
                </MDBContainer>
              </Router>


            </MDBCardText>

            <div className="d-flex example-parent">
              <div className="p-2 col-example">
                <MDBBtn rounded color="success"
                  onClick={this.togglePills("default", "1")} >
                  <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                  Statistik neu berechnen
                </MDBBtn>
              </div>

              <div className="ml-auto p-2 col-example">
                <AnchorLink  offset={() => 50} href='#statistik'>
                  <MDBBtn rounded color="success" type="submit"
                    active={this.state.items["default"] === "2"}
                    onClick={this.togglePills("default", "2")} >
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

export default Statistik;
