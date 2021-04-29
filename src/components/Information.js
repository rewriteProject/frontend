import React, { Component } from 'react';
import { MDBIcon, MDBTabContent, MDBTabPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import ChartSite from './ChartSite'
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loading from '../images/Loading.gif'

const FLO_PORT = process.env.FLO_PORT
const FLO_ADDR = process.env.FLO_ADDR
toast.configure()
class Information extends Component {

  state = {
    options: null,
    disabled: false,
    loadNames: true,
    type: "I1",
    value: '',
    items: {
      default: "1",
    }
  };

  changeState(state) {
    this.setState({type: state})
  }

  togglePills = (type, tab, state) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
    this.changeState(state)
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
    console.log('{"type":"' + this.state.type + '", "country":"' + this.state.value + '"}')
    event.preventDefault();
  }

  async componentDidMount() {
    //const url = FLO_ADDR + ":" + FLO_PORT + "/Amin/onLoad/countries";
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    let arrNames = []
    for (var i = 0; i < data.length; i++) {
      arrNames.push(data[i].name)
    }  
    this.options = arrNames.map((el) => <option value={el} key={el}>{el}</option>);
    this.setState({loadNames:false})
  }

  render() {
    const alert = () => toast.warn('Fülle das Informationen-Formular aus!', {
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
      <MDBContainer id="informationen">
        <MDBCard style={{marginTop: "3rem", marginBottom: "3rem"}}>
          <MDBCardHeader color="warning-color">INFORMATIONEN</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>INFORMATIONEN</MDBCardTitle>

            <MDBCardText>

              <Router>
                <MDBContainer>
                  <div className="d-flex justify-content-end">
                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="warning" type="submit"
                          active={this.state.items["default"] === "1"}
                          onClick={this.togglePills("default", "1", "I1")} >
                          <MDBIcon icon="clock" size="lg" className="mr-2" />
                          Überfälligkeit
                        </MDBBtn>
                      </div>

                      <div className="p-2 col-example text-left">
                        <MDBBtn rounded color="warning" type="submit"
                          active={this.state.items["default"] === "2"}
                          onClick={this.togglePills("default", "2", "I2")} >
                          <MDBIcon icon="weight-hanging" size="lg" className="mr-2" />
                          Gewicht-Auslastung
                        </MDBBtn>
                      </div>
                  </div>
                  <MDBTabContent activeItem={this.state.items["default"]}>
                    <MDBTabPane tabId="1">
                      <h4>Überfälligkeit</h4>
                      <div>
                        <form onSubmit={this.handleSubmit}>
                          
                          {this.state.disabled ? (
                            <div className="d-flex bd-highlight example-parent">
                              <div className="p-2 flex-fill bd-highlight col-12">
                                <img src={loading} alt="loading..." />
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex bd-highlight example-parent">
                              <div className="p-2 flex-fill bd-highlight col-12">
                                <h5>Land: </h5>
                                <select className="browser-default custom-select"
                                value={this.state.value} onChange={this.handleChange}>
                                  <option>Wähle ein Land aus</option>
                                  {this.options}
                                </select>
                              </div>
                            </div>
                          )}

                          <div className="d-flex example-parent">
                            <div className="p-2 col-example">
                              <MDBBtn rounded color="warning"
                                onClick={this.togglePills("default", "1")}
                                type="submit" value="Submit" >
                                <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                                Information neu berechnen
                              </MDBBtn>
                            </div>

                            <div className="ml-auto p-2 col-example">
                              <div>
                                {this.state.disabled
                                  ? <AnchorLink  offset={() => 50} href='#informationen'>
                                      <MDBBtn rounded color="warning" type="submit" value="Submit"
                                        active={this.state.items["default"] === "3"}
                                        onClick={alert} >
                                        <MDBIcon icon="info" size="lg" className="mr-2" />
                                        Erstellen
                                      </MDBBtn>
                                    </AnchorLink>
                                  : <MDBBtn rounded color="warning" type="submit" value="Submit"
                                      active={this.state.items["default"] === "3"}>
                                      <MDBIcon icon="info" size="lg" className="mr-2" />
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
                      <h4>Gewicht-Auslastung</h4>
                      <div>
                        <form onSubmit={this.handleSubmit}>

                          {this.state.disabled ? (
                              <div className="d-flex bd-highlight example-parent">
                                <div className="p-2 flex-fill bd-highlight col-12">
                                  <img src={loading} alt="loading..." />
                                </div>
                              </div>
                            ) : (
                              <div className="d-flex bd-highlight example-parent">
                                <div className="p-2 flex-fill bd-highlight col-12">
                                  <h5>Land: </h5>
                                  <select className="browser-default custom-select"
                                  value={this.state.value} onChange={this.handleChange}>
                                    <option>Wähle ein Land aus</option>
                                    {this.options}
                                  </select>
                                </div>
                              </div>
                            )}

                          <div className="d-flex example-parent">
                            <div className="p-2 col-example">
                              <MDBBtn rounded color="warning"
                                onClick={this.togglePills("default", "1")}
                                type="submit" value="Submit" >
                                <MDBIcon icon="caret-square-left" size="lg" className="mr-2" />
                                Information neu berechnen
                              </MDBBtn>
                            </div>

                            <div className="ml-auto p-2 col-example">
                              <div>
                                {this.state.disabled
                                  ? <AnchorLink  offset={() => 50} href='#informationen'>
                                      <MDBBtn rounded color="warning" type="submit" value="Submit"
                                        active={this.state.items["default"] === "3"}
                                        onClick={alert} >
                                        <MDBIcon icon="info" size="lg" className="mr-2" />
                                        Erstellen
                                      </MDBBtn>
                                    </AnchorLink>
                                  : <MDBBtn rounded color="warning" type="submit" value="Submit"
                                      active={this.state.items["default"] === "3"}>
                                      <MDBIcon icon="info" size="lg" className="mr-2" />
                                      Erstellen
                                    </MDBBtn>
                                }

                              </div>
                            </div>
                          </div>

                        </form>
                      </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <h4>Information</h4>
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

export default Information;
