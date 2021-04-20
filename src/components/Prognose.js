import React, { Component } from 'react';
import { MDBIcon, MDBTabContent, MDBTabPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import DatumPicker from './DatumPicker'
import DependentDropdown from './DependentDropdown'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class Prognose extends Component {

  state = {
    disabled: false,
    type1: "P1",
    type1: "P1",
    value: '',
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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('{"country":"' + this.state.value + '"}')
    event.preventDefault();
  }

  render() {

    const alert = () => toast.error('Fülle das Prognose-Formular aus!', {
                                      position: "bottom-right",
                                      autoClose: 4000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      newestOnTop: false,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                    });


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

                      <h4>Erwartetes Lieferdatum</h4>
                      <div>
                          <form onSubmit={this.handleSubmit}>
                            <div className="d-flex bd-highlight example-parent">
                              <div className="p-2 flex-fill bd-highlight col-12">
                                <h5>Land: </h5>
                                <select className="browser-default custom-select"
                                value={this.state.value} onChange={this.handleChange}>
                                  <option>Wähle ein Land aus</option>
                                  <option value="China">China</option>
                                  <option value="USA">USA</option>
                                  <option value="Russland">Russland</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="d-flex example-parent">
                              <div className="p-2 col-example">
                                <MDBBtn rounded color="danger"
                                  onClick={this.togglePills("default", "1")}
                                  type="submit" value="Submit" >
                                  <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                                  Prognose neu berechnen
                                </MDBBtn>
                              </div>

                              <div className="ml-auto p-2 col-example">
                                <div>
                                  {this.state.disabled
                                    ? <AnchorLink  offset={() => 50} href='#informationen'>
                                        <MDBBtn rounded color="danger" type="submit" value="Submit"
                                          active={this.state.items["default"] === "3"}
                                          onClick={alert} >
                                          <MDBIcon icon="chart-line" size="lg" className="mr-2" />
                                          Erstellen
                                        </MDBBtn>
                                      </AnchorLink>
                                    : <MDBBtn rounded color="danger" type="submit" value="Submit"
                                        active={this.state.items["default"] === "3"}>
                                        <MDBIcon icon="chart-line" size="lg" className="mr-2" />
                                        Erstellen
                                      </MDBBtn>
                                  }

                                </div>
                              </div>
                            </div>
                          </form>
                      </div>

                    </MDBTabPane>

                    <MDBTabPane tabId="2">
                      <form onSubmit={this.handleSubmit}>
                        <h4>Merkmalsentwicklung</h4>
                        <div className="d-flex bd-highlight example-parent">
                          <div className="p-2 flex-fill bd-highlight col-12">
                            <h5>Land: </h5>
                            <select className="browser-default custom-select"
                                value={this.state.value} onChange={this.handleChange}>
                              <option>Wähle ein Land aus</option>
                              <option value="China">China</option>
                              <option value="USA">USA</option>
                              <option value="Russland">Russland</option>
                            </select>
                          </div>
                        </div>

                        <DependentDropdown />
                        <div className="d-flex example-parent">
                          <div className="p-2 col-example">
                            <MDBBtn rounded color="danger" onClick={this.togglePills("default", "1")}
                              type="submit" value="Submit" >
                              <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                              Prognose neu berechnen
                            </MDBBtn>
                          </div>

                          <div className="ml-auto p-2 col-example">
                            <div>
                              {this.state.disabled
                                ? <AnchorLink  offset={() => 50} href='#informationen'>
                                    <MDBBtn rounded color="danger" type="submit" value="Submit"
                                      active={this.state.items["default"] === "3"} onClick={alert} >
                                      <MDBIcon icon="chart-line" size="lg" className="mr-2" />
                                      Erstellen
                                    </MDBBtn>
                                  </AnchorLink>
                                : <MDBBtn rounded color="danger" type="submit" value="Submit"
                                    active={this.state.items["default"] === "3"}>
                                    <MDBIcon icon="chart-line" size="lg" className="mr-2" />
                                    Erstellen
                                  </MDBBtn>
                              }

                            </div>
                          </div>
                        </div>
                      </form>
                    </MDBTabPane>

                    <MDBTabPane tabId="3">

                      <h4>Prognose</h4>
                      <ChartSite />

                    </MDBTabPane>

                  </MDBTabContent>
                </MDBContainer>
              </Router>

            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  };
};

export default Prognose;
