import React, { Component } from 'react';
import { MDBNavLink, MDBIcon, MDBRow, MDBCol, MDBNav, MDBTabContent, MDBLink, MDBNavItem, MDBTabPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
                          Erwartetes Lieferdatum
                        </MDBBtn>
                      </div>

                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="success" type="submit"
                          active={this.state.items["default"] === "2"}
                          onClick={this.togglePills("default", "2")} >
                          <MDBIcon icon="filter" size="lg" className="mr-2" />
                          Merkmalsentwicklung
                        </MDBBtn>
                      </div>
                  </div>
                  <MDBTabContent activeItem={this.state.items["default"]}>
                    <MDBTabPane tabId="1">
                      <p>
                        1
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        2
                      </p>
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
                <MDBBtn rounded color="success"
                  active={this.state.items["default"] === "1"}
                  onClick={this.togglePills("default", "1")} >
                  <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                  Statistik neu berechnen
                </MDBBtn>
              </div>

              <div className="ml-auto p-2 col-example">
                <AnchorLink  offset={() => 50} href='#statistik'>
                  <MDBBtn rounded color="success" type="submit"
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

export default Statistik;
