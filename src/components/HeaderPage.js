import React, { Fragment } from 'react';
import { MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import statisticImage from '../images/statistics.jpg'
import blackImage from '../images/black.jpg'

class HeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="peach-gradient" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Home</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="ueberUns">Über uns</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="kontakt">Kontakt</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-facebook" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-google-plus" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-linkedin" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-instagram" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="fab fa-pinterest" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={statisticImage}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">

            <Fragment>
              <MDBBtn rounded color="success">Statistik</MDBBtn>
              <MDBBtn rounded color="danger">Prognosen</MDBBtn>
              <MDBBtn rounded color="warning">Informationen</MDBBtn>
            </Fragment>

            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default HeaderPage;
